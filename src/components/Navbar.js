import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

export default function Navbar() {
  const [openOperations, setOpenOperations] = React.useState(false);
  const [openBonus, setOpenBonus] = React.useState(false);
  const [openStaffManagement, setOpenStaffManagement] = React.useState(false);
  const [openReports, setOpenReports] = React.useState(false);

  const handleOperationsClick = (e) => {
    setOpenOperations(!openOperations);
  };
  const handleBonusClick = () => {
    setOpenBonus(!openBonus);
  };
  const handleStaffManagementClick = () => {
    setOpenStaffManagement(!openStaffManagement);
  };
  const handleReportsClick = () => {
    setOpenReports(!openReports);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#e7e9eb",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <Box>
              <ListItemButton onClick={handleOperationsClick}>
                <ListItemText primary={"Requests"} />
                <ListItemIcon>
                  {openOperations ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
              </ListItemButton>
              <Collapse in={openOperations} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={"/requests/client-laptop"}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary="Client Laptop Request" />
                  </ListItemButton>

                  <ListItemButton
                    component={NavLink}
                    to={"/requests/client-credentials"}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary="Client Credentials Request" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>

            <Divider variant="middle" />
          </List>
        </Box>
      </Drawer>
    </>
  );
}
