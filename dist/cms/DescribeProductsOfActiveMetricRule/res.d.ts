export interface DescribeProductsOfActiveMetricRuleResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `F82E6667-7811-4BA0-842F-5B2DC42BBAAD`
     */
    RequestId: string;
    /**
     * 开通一键报警的云服务列表。云服务之间用英文逗号（,）分隔。取值：
     *
     * - ecs：云服务器ECS。
     * - rds：云数据库RDS版。
     * - slb：负载均衡。
     * - redis_standard：云数据库Redis标准版。
     * - redis_sharding：云数据库Redis集群版。
     * - redis_splitrw：云数据库Redis读写分离版。
     * - mongodb：云数据库MongoDB版（副本集）。
     * - mongodb_sharding：云数据库MongoDB版（分片集群）。
     * - hbase：云数据库HBase版。
     * - elasticsearch：Elasticsearch。
     * - opensearch：OpenSearch。
     * @example `ecs,rds`
     */
    Datapoints: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    AllProductInitMetricRuleList: {
        /**
         * 开通一键报警的云服务列表。
         */
        AllProductInitMetricRule: {
            /**
             * 阿里云服务缩写。
             * @example `ecs`
             */
            Product: string;
            AlertInitConfigList: {
                /**
                 * 初始化开通一键报警云服务的规则列表。
                 */
                AlertInitConfig: {
                    /**
                     * 监控项名称。详情请参见[云服务监控项](~~163515~~)。
                     * @example `cpu_total`
                     */
                    MetricName: string;
                    /**
                     * 报警重试次数。
                     * @example `3`
                     */
                    EvaluationCount: string;
                    /**
                     * 指标所属空间。用于区分每个云服务配置。详情请参见[云服务监控项](~~163515~~)。
                     * @example `acs_rds_dashboard`
                     */
                    Namespace: string;
                    /**
                     * 报警阈值。
                     * @example `90`
                     */
                    Threshold: string;
                    /**
                     * 报警统计方法。详情请参见[云服务监控项](~~163515~~)。
                     * @example `Average`
                     */
                    Statistics: string;
                    /**
                     * 监控数据的聚合周期。单位：分钟。详情请参见[云服务监控项](~~163515~~)。
                     * @example `1m`
                     */
                    Period: string;
                    /**
                     * 报警级别。
                     * @example `CRITICAL`
                     */
                    Level: string;
                    /**
                     * 警告级别阈值比较符。
                     * @example `GreaterThanOrEqualToThreshold`
                     */
                    ComparisonOperator: string;
                }[];
            };
        }[];
    };
}
