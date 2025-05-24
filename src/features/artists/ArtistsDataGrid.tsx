import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { Skeleton } from "@mui/material";
import { useGetArtistsQuery } from "../../api/artistsRepository";

const ArtistsDataGrid = () => {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const { data, isLoading, isFetching } = useGetArtistsQuery(page, pageSize);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nombre",
      align: "center",
      headerAlign: "center",
      width: 400,
    },
    {
      field: "disambiguation",
      headerName: "Disambiguación",
      align: "center",
      headerAlign: "center",
      width: 350,
      renderCell: (params) => {
        return params.row.disambiguation || "Sin información";
      },
    },
    {
      field: "life-span.begin",
      headerName: "Fecha de fundación",
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return params.row["life-span"].begin;
      },
      width: 200,
    },
    {
      field: "life-span.ended",
      headerName: "Fecha de disolución",
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return params.row["life-span"].ended
          ? params.row["life-span"].end
          : "Presente";
      },
      width: 200,
    },
  ];

  if (isLoading) {
    return (
      <Skeleton
        variant="rectangular"
        height={400}
        width="100%"
        sx={{ borderRadius: 2, bgcolor: "grey.400" }}
      />
    );
  }

  return (
    <DataGrid
      loading={isLoading || isFetching}
      rows={data?.artists || []}
      rowCount={data?.count || 0}
      paginationMode="server"
      disableRowSelectionOnClick
      keepNonExistentRowsSelected
      pagination
      onPaginationModelChange={(model) => {
        setPage(model.page);
        setPageSize(model.pageSize);
      }}
      paginationModel={{
        page,
        pageSize,
      }}
      pageSizeOptions={[10, 25, 50, 100]}
      columns={columns}
      disableAutosize
      disableColumnResize
      disableColumnMenu
      density="compact"
    />
  );
};

export default ArtistsDataGrid;
