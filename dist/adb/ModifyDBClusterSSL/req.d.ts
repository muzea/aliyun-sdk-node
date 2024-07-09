export interface ModifyDBClusterSSLRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * >您可以调用[DescribeDBClusters](~~129857~~)接口查看数仓版（3.0）集群的集群ID。
     * @example `am-bp1r053byu48p****`
     */
    "DBClusterId": string;
    /**
     * 开启或关闭SSL，取值：
     * - true：开启
     * - false: 关闭
     * @example `true`
     */
    "EnableSSL": boolean;
    /**
     * 需要创建或更新服务器证书的内网或外网连接地址。
     * @example `am-d7oualxo05x4o5be872***.ads.aliyuncs.com`
     */
    "ConnectionString"?: string;
}
