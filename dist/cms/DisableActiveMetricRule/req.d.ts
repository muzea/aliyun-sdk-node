interface DisableActiveMetricRuleRequest {
    "RegionId"?: string;
    /**
    * 目前支持一键告警的产品:
    * * ecs (云服务器 ECS)
    * * rds (云数据库RDS版)
    * * slb (负载均衡)
    * * redis_standard (云数据库Redis标准版)
    * * redis_sharding (云数据库Redis集群版)
    * * redis_splitrw (云数据库Redis读写分离版)
    * * mongodb (云数据库MongoDB版(副本集))
    * * mongodb_sharding (云数据库MongoDB版(分片集群))
    * * hbase (云数据库HBase版)
    * * elasticsearch (Elasticsearch)
    * * opensearch (OpenSearch)
    * @example `ecs`
    */ "Product": string;
}
export { DisableActiveMetricRuleRequest };