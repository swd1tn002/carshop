import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);

export function CarTable({ cars }) {
    
    
  return (
    <>
      <h1>Cars ({cars.length})</h1>
      <div style={{height: 300, minWidth: 700}}>
      <AgGridReact 
            rowData={cars}
            columnDefs={[{field:"brand"}, {field: "model"}]}

      />
      </div>
    </>
  );
}   