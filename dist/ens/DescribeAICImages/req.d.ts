export interface DescribeAICImagesRequest {
    /**
     * AIC产品镜像ID。
     * @example `m-ad0ddaddc2d54adeaa09b7c0f1e****`
     */
    "ImageId"?: string;
    /**
     * AIC镜像仓库URL地址。
     * @example `****.alibaba-inc.com/aic/socimage:test`
     */
    "ImageUrl"?: string;
    /**
     * 分页，起始值为**1**。
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
     * 镜像状态，取值：
     * - **verifying**：待认证
     * - **disable**：不可用。
     * - **available**：可用
     * @example `available`
     */
    "Status"?: string;
    /**
     * 查询起始时间，格式"2006-01-02"；默认无时间限制。
     * @example `2022-01-02`
     */
    "MinDate"?: string;
    /**
     * 查询终止时间，格式"2006-01-02"；默认无时间限制。
     * @example `2022-02-02`
     */
    "MaxDate"?: string;
    /**
     * 镜像类型，取值：
     * - **public**：公共镜像。
     * - **private**：自定义镜像。
     * @example `public`
     */
    "ImageType"?: string;
    /**
     * 镜像描述信息。
     * @example `控制台测试操作`
     */
    "Description"?: string;
}
