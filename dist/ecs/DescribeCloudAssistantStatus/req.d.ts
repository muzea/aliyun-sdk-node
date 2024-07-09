export interface DescribeCloudAssistantStatusRequest {
    /**
     * 实例所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例的操作系统类型。取值范围：
     * - Windows。
     * - Linux。
     * - FreeBSD。
     * @example `Windows`
     */
    "OSType"?: string;
    /**
     * 当前页码。
     * 起始值为1。
     * 默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。若已设置**InstanceId**参数，则该参数无效。
     * 最大值为50。
     * 默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时每页的最大条目数。若已设置**InstanceId**参数，则该参数无效。
     * 最大值为50。
     * 默认值为10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAdDWBF2`
     */
    "NextToken"?: string;
    /**
     * 实例ID列表。
     * @example `i-bp1iudwa5b1tqa****`
     */
    "InstanceId"?: string[];
}
