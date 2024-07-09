export interface AllocateClusterPublicConnectionRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp278jg9****`
     */
    "DBClusterId": string;
    /**
     * 公网连接地址的前缀。
     * - 由小写字母开头，必须包含小写字母、数字和中划线（-）组成。
     * - 长度不超过30个字符。
     * - 默认使用集群名。
     * @example `am-bp278jg9****.ads.aliyuncs.com`
     */
    "ConnectionStringPrefix"?: string;
}
