export interface DescribeExposedStatisticsDetailRequest {
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 指定分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定要查看的统计值类型。取值：
     * - **exposureType**：暴露在互联网中的网关资产。
     * - **exposurePort**：暴露在互联网中的端口。
     * - **exposureComponent**：暴露在互联网中的系统组件。
     * - **exposureIp**：暴露在互联网中的IP地址。
     * @example `exposureType`
     */
    "StatisticsType": string;
    /**
     * **StatisticsType**为**exposureType**时，指定要查询的网关实例ID。
     * @example `lb-2ze4rso39h4nczcqs****`
     */
    "StatisticsTypeInstanceValue"?: string;
    /**
     * **StatisticsType**为**exposureType**时，指定要查询的网关资产类型。取值：
     * - **SLB**：负载均衡SLB公网IP。
     * - **DNAT**：使用DNAT功能连接互联网的NAT网关。
     * @example `SLB`
     */
    "StatisticsTypeGatewayType"?: string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `1232428423234****`
     */
    "ResourceDirectoryAccountId"?: number;
}
