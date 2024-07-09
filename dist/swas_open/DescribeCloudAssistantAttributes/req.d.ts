export interface DescribeCloudAssistantAttributesRequest {
    /**
     * 指定的轻量应用服务器实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 当前页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页行数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 轻量应用服务器的实例ID。
     */
    "InstanceIds": string[];
}
