export interface DescribeDisksRequest {
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区
     * @example `cn-hangzhou-a`
     */
    "ZoneId"?: string;
    /**
     * 磁盘ID
     * @example `iscsi-cluster-id`
     */
    "DiskIds"?: string;
    /**
     * 磁盘名称
     * @example `d-xxx`
     */
    "DiskName"?: string;
    /**
     * 云盘种类
     * @example `cloud_ssd`
     */
    "Category"?: string;
    /**
     * 云盘状态
     * @example `In_use`
     */
    "Status"?: string;
    /**
     * 标签键值对。n的取值范围为 [1, 20]
     */
    "Tag"?: {
        /**
         * 资源的标签键
         * @example `tag-key`
         */
        Key: string;
        /**
         * 资源的标签值
         * @example `tag-value`
         */
        Value: string;
    }[];
    /**
     * 资源组ID
     * @example `rg-acfmvs*******`
     */
    "ResourceGroupId"?: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * Token方式最大个数。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页模式查询时的页数。
     * @example `1`
     */
    "PageNumber"?: number;
}
