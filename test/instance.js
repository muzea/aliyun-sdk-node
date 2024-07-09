const { hostConfig } = require("../dist");

const api = hostConfig({
  accessKeyId: "",
  accessKeySecret: "",
});

api.ecs
  .DescribeInstances({
    RegionId: "cn-qingdao",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.error(res);
  });
