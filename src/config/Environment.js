export default {
  CurrentEnvironment: "Prod",

  EnvironmentConfig: {
    Develop: {
      DATA_URL: "http://localhost:3000"
    },
    Demo: {
      DATA_URL: "http://192.168.1.102/imooc"
    },
    Testing: {
      DATA_URL: "http://localhost:3000"
    },
    Prod: {
      DATA_URL: "http://139.155.123.174/imooc"
    }
  }
};
