const { hostConfig } = require('../dist');

const api = hostConfig({ accessKeyId: '', accessKeySecret: '' });

api.ecs.DescribeInstances({
  RegionId: 'ap-southeast-1',
}).then(res => {
  console.log(res.Instances.Instance[0]);
});
