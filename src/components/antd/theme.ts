import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    // fontSize: 16,
    // colorPrimary: '#52c41a',
  },
  components: {
    Menu: {
      darkSubMenuItemBg: "transparent",
      darkItemBg: "transparent",
      darkItemSelectedBg: "transparent",
    },
  },
};

export default theme;
