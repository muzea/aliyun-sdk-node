export interface ModifyMonitorGroupInstancesRequest {
    /**
     * 应用分组ID。
     * @example `12345`
     */
    "GroupId": number;
    /**
     * 实例列表
     */
    "Instances": {
        /**
         * 实例名称。N的取值范围：1~2000。
         * @example `HostName`
         */
        InstanceName: string;
        /**
         * 资源实例所属的云产品名称或规格。目前支持的产品如下：
         * - ECS（包括阿里云和非阿里云主机）
         * - RDS（云数据库RDS版）
         * - ADS（分析型数据库）
         * - SLB（负载均衡）
         * - VPC（弹性IP）
         * - APIGATEWAY（API网关）
         * - CDN（内容分发网络）
         * - CS（容器服务Swarm版）
         * - DCDN（全站加速）
         * - DDoS（DDoS防护）
         * - EIP（弹性公网IP）
         * - ELASTICSEARCH
         * - EMR（E-MapReduce）
         * - ESS（弹性伸缩）
         * - HBASE（云数据库 HBase）
         * - IOT_EDGE（IoT边缘计算）
         * - K8S_POD（k8s pod）
         * - KVSTORE_SHARDING（Redis集群版）
         * - KVSTORE_SPLITRW（Redis读写分离版）
         * - KVSTORE_STANDARD（Redis标准版）
         * - MEMCACHE（云数据库Memcache）
         * - MNS（消息服务）
         * - MONGODB（MongoDB 副本实例）
         * - MONGODB_CLUSTER（MongoDB集群版本）
         * - MONGODB_SHARDING（MongoDB分片集群）
         * - MQ_TOPIC（消息服务TOPIC）
         * - OCS（旧版云数据库Memcache）
         * - OPENSEARCH（开放搜索）
         * - OSS（对象存储OSS）
         * - POLARDB（云数据库PolarDB）
         * - PETADATA（云数据库HybridDB for MySQL）
         * - SCDN（安全加速）
         * - SHAREBANDWIDTHPACKAGES（共享带宽包）
         * - SLS（日志服务）
         * - VPN（VPN网关）
         * N的取值范围：1~2000。
         * @example `ECS`
         */
        Category: string;
        /**
         * 资源实例ID。N的取值范围：1~2000。
         * @example `i-a2d5q7pm12****`
         */
        InstanceId: string;
        /**
         * 地域ID（RegionId）。N的取值范围：1~2000。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
