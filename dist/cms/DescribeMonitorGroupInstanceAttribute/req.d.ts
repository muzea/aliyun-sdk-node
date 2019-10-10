interface DescribeMonitorGroupInstanceAttributeRequest {
    "RegionId"?: string;
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId": number;
    /**
    * 分页页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页显示记录条数。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 总记录条数。
    * @example `true`
    */ "Total"?: boolean;
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
    */ "Category"?: string;
    /**
    * 按照实例ID模糊搜索
    * @example `i-123`
    */ "Keyword"?: string;
    /**
    * 按照多实例搜索，多个实例之间用逗号分隔。一次最多可以删除20个。
    * @example `rm-bp18j902q1h12****,rm-bp18j902q1h1****`
    */ "InstanceIds"?: string;
}
export { DescribeMonitorGroupInstanceAttributeRequest };