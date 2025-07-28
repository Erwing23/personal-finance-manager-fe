import { Box } from "@mui/material";

export default function Page() {
  return (
    <Box sx={{ p: 2 }}>
      {/* Row of two boxes */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", // Wrap on small screens
          gap: 2,
          mb: 2,
        }}
      >
        <Box
          sx={{
            flex: "1 1 40%", // roughly 5/12
            minWidth: "300px", // prevents collapsing too much on small screens
            backgroundColor: "#f0f0f0",
            height: 200,
          }}
        >
          Box 1
        </Box>
        <Box
          sx={{
            flex: "1 1 40%",
            minWidth: "300px",
            backgroundColor: "#e0e0e0",
            height: 200,
          }}
        >
          Box 2
        </Box>
      </Box>

      {/* Full width box */}
      <Box
        sx={{
          backgroundColor: "#d0d0d0",
          height: 200,
        }}
      >
        Box 3 (Full Width)
      </Box>
    </Box>
  );
}
