export interface DescribeAICImagesResponse {
    /**
     * 请求ID。
     * @example `72DC6C0A-D9A8-5345-A2BE-FE354CC728A0`
     */
    RequestId: string;
    /**
     * 镜像信息数组。
     */
    Images: {
        /**
         * AIC镜像仓库URL地址。
         * @example `****.alibaba-inc.com/aic/socimage:test`
         */
        ImageUrl: string;
        /**
         * AIC产品镜像ID。
         * @example `m-ad0ddaddc2d54adeaa09b7c0f1e****`
         */
        ImageId: string;
        /**
         * 镜像的仓库用户名称。
         * @example `user`
         */
        User: string;
        /**
         * 镜像状态。取值：**available**（可用的）。
         * @example `available`
         */
        Status: string;
        /**
         * 镜像创建时间。
         * @example `2022-01-22 10:54:34`
         */
        CreationTime: string;
        /**
         * 镜像描述信息。
         * @example `控制台测试操作`
         */
        Description: string;
    }[];
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数。
     * 默认值：10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表数据总数。
     * @example `1`
     */
    TotalCount: number;
}
