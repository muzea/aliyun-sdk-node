export interface DescribeExportImageInfoRequest {
    /**
     * 镜像ID。
     * @example `m-xxxxx`
     */
    "ImageId"?: string;
    /**
     * 镜像的名称。
     * @example `testImageName`
     */
    "ImageName"?: string;
    /**
     * 实例状态列表的页码，起始值为**1**，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值**50**行，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
