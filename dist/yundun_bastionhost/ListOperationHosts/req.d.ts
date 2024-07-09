export interface ListOperationHostsRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-09k22avmw0q`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定分页查询时，当前页的页码。默认值为1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * PageSize参数最大取值为100。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 指定要查询的主机的操作系统。取值：
     * - **Linux**
     * - **Windows**
     * @example `Linux`
     */
    "OSType"?: string;
    /**
     * 指定要查询的主机名称。不支持模糊查询，只支持精确查询。
     * @example `abc`
     */
    "HostName"?: string;
    /**
     * 指定要查询的主机地址，可使用域名或IP地址。不支持模糊查询，只支持精确查询。
     * @example `10.162.172.132`
     */
    "HostAddress"?: string;
    /**
     * 指定要查询主机的来源。取值：
     * - **Local**：本地主机
     * - **Ecs**：ECS实例
     * @example `Local`
     */
    "Source"?: string;
    /**
     * ECS实例ID。精确搜索。
     * @example `i-bp19ienyt0yax748****`
     */
    "SourceInstanceId"?: string;
    /**
     * 指定要查询的主机状态。取值：
     *  - **Normal**：正常
     * - **Release**：已释放
     * @example `Normal`
     */
    "SourceInstanceState"?: string;
}
