export interface DescribeSelfImagesRequest {
    /**
     * 镜像资源列表的页码。起始值：**1**。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 镜像ID，支持模糊查询。
     * @example `centos_6_08_64_20G_a****`
     */
    "ImageId"?: string;
    /**
     * 镜像名称，支持模糊查询。
     * @example `centos_6_08_64_20G_a****`
     */
    "ImageName"?: string;
    /**
     * 快照ID。
     * @example `sp-5xg63dmojc1oaa3pk****`
     */
    "SnapshotId"?: string;
}
