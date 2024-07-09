export interface DescribeTagsRequest {
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称
     * @example `pxc-xxx`
     */
    "DBInstanceName"?: string;
    /**
     * 标签Key
     * @example `test`
     */
    "TagKey"?: string;
}
