export interface DescribeExposedStatisticsDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7CBAFB3F-1ED7-4A23-986A-6F67F0466BD1`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的数据总条数。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 返回的网关资产、暴露端口、暴露组件或公网IP列表。
     */
    StatisticsDetails: {
        /**
         * 暴露在互联网中的公网IP。
         * @example `123.57.XX.XX`
         */
        ExposureIp: string;
        /**
         * 暴露在互联网中的端口。
         * @example `22`
         */
        ExposurePort: string;
        /**
         * 暴露在互联网中的网关资产名称。
         * @example `ngw-bp1vkbju8f3w87c9v****`
         */
        ExposureTypeInstanceName: string;
        /**
         * 暴露在互联网上的您服务器的系统漏洞数量。
         * @example `0`
         */
        ExposedCount: number;
        /**
         * 暴露方式。取值：
         * - **INTERNET_IP**：ECS公网IP。
         * - **SLB**：负载均衡SLB公网IP。
         * - **EIP**：弹性公网IP。
         * - **DNAT**：使用DNAT功能连接互联网的NAT网关。
         * @example `SLB`
         */
        ExposureType: string;
        /**
         * 资产所在的地域的ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 暴露在互联网中的系统组件。
         * @example `tomcat`
         */
        ExposureComponent: string;
        /**
         * 暴露方式对应的实例ID。不同暴露方式对应不同的实例ID，取值：
         * - **ExposureType**为**INTERNET_IP**时：取值为空。
         * - **ExposureType**为**SLB**时：取值为负载均衡公网实例ID。
         * - **ExposureType**为**EIP**时：取值为弹性公网IP的实例ID。
         * - **ExposureType**为**DNAT**时：取值为NAT网关实例ID。
         * @example `lb-2ze4rso39h4nczcqs****`
         */
        ExposureTypeId: string;
    }[];
}
