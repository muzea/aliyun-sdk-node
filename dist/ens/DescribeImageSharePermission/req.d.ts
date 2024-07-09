export interface DescribeImageSharePermissionRequest {
    /**
     * 镜像ID。
     * @example `m-5s7qotzavwbrnzaqh4unm****`
     */
    "ImageId": string;
    /**
     * 查询列表的页码。起始值为**1**。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分页查询时设置的每页行数，最大值为**100**行。
     * 默认值：**10**。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 阿里云账号ID。
     * @example `171710408091****`
     */
    "AliyunId"?: number;
}
