import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { useMemo, useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, Typography } from "@mui/material";

ModuleRegistry.registerModules([AllCommunityModule]);

export function CarTable({ cars, removeCar }) {
  const [deleteCar, setDeleteCar] = useState(null);

  const colDefs = useMemo(() => [
    { field: "brand" },
    { field: "model" },
    { field: "color" },
    { field: "fuel" },
    { field: "modelYear" },
    { field: "price" },
    {
      cellRenderer: (params) => {
        const car = params.data;
        return <Button
          onClick={() => setDeleteCar(car)}
          variant="outlined"
          size="small"
          color="error">
          Delete
        </Button>
      },
      width: 120,
    },
  ], []);

  return (
    <Stack sx={{ display: "flex", flexGrow: 1, flexDirection: "column", gap: 2, padding: 2 }}>
      <Typography variant="h6">Cars ({cars.length})</Typography>

      <Box sx={{ flexGrow: 1, width: "100%", height: 100 }}>
        <AgGridReact rowData={cars} columnDefs={colDefs} />
      </Box>

      { /* Dialog borrowed from https://mui.com/material-ui/react-dialog/ */}
      <Dialog
        open={deleteCar !== null}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete the car?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete the car {deleteCar?.brand} {deleteCar?.model}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDeleteCar(null)}
            variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={() => { removeCar(deleteCar); setDeleteCar(null); }}
            autoFocus
            color="error"
            variant="outlined"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Stack >
  );
}