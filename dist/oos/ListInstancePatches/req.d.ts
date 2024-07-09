export interface ListInstancePatchesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `i-bp1jaxa2bs4bps7*****`
     */
    "InstanceId"?: string;
    /**
     * 分页大小。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记Token。
     * @example `-`
     */
    "NextToken"?: string;
    /**
     * 补丁过滤状态，不设置为不过滤。
     * @example `Installed`
     */
    "PatchStatuses"?: string;
}
