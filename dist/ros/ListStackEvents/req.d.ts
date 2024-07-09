export interface ListStackEventsRequest {
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId": string;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 事件列表的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 资源状态。
     * @example `CREATE_IN_PROGRESS`
     */
    "Status"?: string[];
    /**
     * 资源类型列表。
     * @example `ALIYUN::ECS::Instance`
     */
    "ResourceType"?: string[];
    /**
     * 资源逻辑ID。
     * @example `WebServer`
     */
    "LogicalResourceId"?: string[];
}
