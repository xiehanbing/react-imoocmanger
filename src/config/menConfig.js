export default [
  {
    title: "首页",
    key: "/admin/home",
    icon: "home",
    index: 0,
    order: 0
  },
  {
    title: "UI",
    key: "/admin/ui",
    icon: "dashboard",
    index: 0,
    order: 1,
    children: [
      {
        title: "按钮",
        key: "/admin/ui/buttons"
      },
      {
        title: "弹框",
        key: "/admin/ui/modals"
      },
      {
        title: "Loading",
        key: "/admin/ui/loading"
      },
      {
        title: "通知提醒",
        key: "/admin/ui/notifitaion"
      },
      {
        title: "全局Message",
        key: "/admin/ui/message"
      },
      {
        title: "Tab页签",
        key: "/admin/ui/tabs"
      },
      {
        title: "图片画廊",
        key: "/admin/ui/gallery"
      },
      {
        title: "轮播图",
        key: "/admin/ui/carousel"
      }
    ]
  },
  {
    title: "表单",
    key: "/admin/form",
    icon: "form",
    index: 0,
    order: 2,
    children: [
      {
        title: "登录",
        key: "/admin/form/login"
      },
      {
        title: "注册",
        key: "/admin/form/register"
      }
    ]
  },
  {
    title: "表格",
    key: "/admin/table",
    icon: "table",
    index: 0,
    order: 3,
    children: [
      {
        title: "基础表格",
        key: "/admin/table/basic"
      },
      {
        title: "高级表格",
        key: "/admin/table/high"
      }
    ]
  },
  {
    title: "富文本",
    key: "/admin/rich",
    icon: "edit",
    index: 0,
    order: 4
  },
  {
    title: "城市管理",
    key: "/admin/city",
    icon: "bank",
    index: 0,
    order: 5
  },
  {
    title: "订单管理",
    key: "/admin/order",
    icon: "ordered-list",
    index: 0,
    order: 6
  },
  {
    title: "员工管理",
    key: "/admin/employee",
    icon: "user",
    index: 0,
    order: 7
  },
  {
    title: "车辆地图",
    key: "/admin/carmap",
    icon: "car",
    index: 0,
    order: 8
  },
  {
    title: "图标",
    key: "/admin/charts",
    icon: "bulb",
    index: 0,
    order: 9,
    children: [
      {
        title: "柱形图",
        key: "/admin/charts/bar"
      },
      {
        title: "饼图",
        key: "/admin/charts/pie"
      },
      {
        title: "折线图",
        key: "/admin/charts/line"
      }
    ]
  },
  {
    title: "权限设置",
    key: "/admin/auth",
    icon: "unlock",
    index: 0,
    order: 3
  }
];
