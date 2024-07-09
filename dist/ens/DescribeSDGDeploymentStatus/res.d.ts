export interface DescribeSDGDeploymentStatusResponse {
    /**
     * 请求ID
     * @example `68B85217-03B8-5141-9216-EA4D7C496B9A`
     */
    RequestId: string;
    /**
     * SDG 部署信息列表
     */
    DeploymentStatus: {
        /**
         * AIC实例ID。
         * @example `aic-xxxx`
         */
        InstanceId: string;
        /**
         * 部署类型
         * @example `overlay`
         */
        MountType: string;
        /**
         * 节点ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * SDG部署状态
         * @example `success`
         */
        Status: string;
        /**
         * 最新的状态更新时间。
         * @example `2023-02-17T02:44:31Z`
         */
        UpdateTime: string;
    }[];
    /**
     * 页码，起始值为1。默认值：1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数，默认值为**10**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询到的部署记录总数。
     * @example `100`
     */
    TotalCount: number;
}
