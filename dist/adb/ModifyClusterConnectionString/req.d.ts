export interface ModifyClusterConnectionStringRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp18934i73vb****`
     */
    "DBClusterId": string;
    /**
     * 定义公网连接地址的前缀。
     * - 以小写字母开头，可包含小写字母、数字和中划线（-）。
     * - 长度不超过30个字符。
     * @example `test-123`
     */
    "ConnectionStringPrefix": string;
    /**
     * 当前AnalyticDB MySQL数仓版（3.0）集群的公网连接地址。
     * > 您可以调用[DescribeDBClusterNetInfo](~~143384~~)接口查看集群的公网连接地址。
     * @example `am-bp18934i73vb****.ads.aliyuncs.com`
     */
    "CurrentConnectionString": string;
    /**
     * 端口号，固定为**3306**。
     * @example `3306`
     */
    "Port"?: number;
}
