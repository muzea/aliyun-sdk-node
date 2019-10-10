interface DeleteMonitorGroupInstancesRequest {
    "RegionId"?: string;
    /**
    * 需要删除的实例，多个实例之间用英文逗号分隔开。一次最多能够删除20个。
    * @example `i-a2d5q7pm3f912****,i-a2d5q7pm3f222****`
    */ "InstanceIdList": string;
    /**
    * 资源实例所属的云产品名称缩写，如下：
    * - ECS（包括阿里云和非阿里云主机），
    * - RDS（云数据库RDS版），
    * - ADS（分析型数据库），
    * - SLB（负载均衡），
    * - VPC（弹性IP），
    * - APIGATEWAY（API网关），
    * - CDN，
    * - CS（容器服务Swarm版），
    * - DCDN（全站加速），
    * - DDOS，
    * - EIP（弹性公网IP），
    * - ELASTICSEARCH，
    * - EMR（E-MapReduce），
    * - ESS（弹性伸缩），
    * - HBASE，
    * - IOT_EDGE（iot边缘计算），
    * - K8S_POD（k8s pod），
    * - KVSTORE_SHARDING（Redis集群版），
    * - KVSTORE_SPLITRW（Redis读写分离版），
    * - KVSTORE_STANDARD（Redis标准版），
    * - MEMCACHE，
    * - MNS（消息服务），
    * - MONGODB（MongoDB 副本实例），
    * - MONGODB_CLUSTER（MongoDB集群版本），
    * - MONGODB_SHARDING（MongoDB分片集群），
    * - MQ_TOPIC（消息服务TOPIC），
    * - OCS（旧版云数据库Memcache），
    * - OPENSEARCH（开放搜索），
    * - OSS（对象存储OSS），
    * - POLARDB，
    * - PETADATA（HybridDB for MySQL），
    * - SCDN（安全加速），
    * - SHAREBANDWIDTHPACKAGES（共享带宽包），
    * - SLS（日志服务），
    * - VPN（VPN网关)。
    * @example `ecs`
    */ "Category": string;
    /**
    * 应用分组ID。
    * @example `123456`
    */ "GroupId": number;
}
export { DeleteMonitorGroupInstancesRequest };