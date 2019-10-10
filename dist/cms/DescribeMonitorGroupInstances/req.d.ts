interface DescribeMonitorGroupInstancesRequest {
    "RegionId"?: string;
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId": number;
    /**
    * 每页显示记录条数，默认值是10。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 页码，默认值是1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 产品名称缩写，目前支持的产品有：
    * - ECS(包括阿里云和非阿里云主机),
    * - RDS（云数据库RDS版),
    * - ADS（分析型数据库）,
    * - SLB(负载均衡),
    * - VPC（弹性IP）,
    * - APIGATEWAY(API网关),
    * - CDN,
    * - CS（容器服务Swarm版）,
    * - DCDN(全站加速),
    * - DDOS,
    * - EIP(弹性公网IP),
    * - ELASTICSEARCH,
    * - EMR(E-MapReduce),
    * - ESS(弹性伸缩),
    * - HBASE,
    * - IOT_EDGE(iot边缘计算),
    * - K8S_POD(k8s pod),
    * - KVSTORE_SHARDING(Redis集群版）,
    * - KVSTORE_SPLITRW(Redis读写分离版),
    * - KVSTORE_STANDARD(Redis标准版),
    * - MEMCACHE,MNS(消息服务),
    * - MONGODB(MongoDB 副本实例),
    * - MONGODB_CLUSTER(MongoDB集群版本),
    * - MONGODB_SHARDING(mongodb 分片集群),
    * - MQ_TOPIC(消息服务TOPIC）,
    * - OCS,
    * - OPENSEARCH,OSS(对象存储OSS）,
    * - POLARDB,PETADATA,SCDN(安全加速),
    * - SHAREBANDWIDTHPACKAGES(共享带宽包),
    * - SLS（日志服务),
    * - VPN(VPN网关)。
    * @example `ECS`
    */ "Category"?: string;
    /**
    * 按照实例名称模糊查询。
    * @example `s1`
    */ "Keyword"?: string;
    /**
    * 按照实例ID搜索。
    * @example `i-x1234568`
    */ "InstanceIds"?: string;
}
export { DescribeMonitorGroupInstancesRequest };