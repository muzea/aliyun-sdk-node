export interface DescribeImageSharePermissionRequest {
    /**
     * 自定义镜像所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 自定义镜像ID。
     * @example `m-bp1caf3yicx5jlfl****`
     */
    "ImageId": string;
    /**
     * 查询结果显示的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询结果显示的每页的信息条目数。
     * 最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
