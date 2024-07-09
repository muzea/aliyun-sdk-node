export interface DescribeInstancesRequest {
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 设置分页查询时，每页显示的堡垒机实例的数量。默认值为**10**，表示每页显示10条堡垒机实例信息。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 堡垒机实例的状态。取值：
     * - **PENDING**：未初始化
     * - **CREATING**：创建中
     * - **RUNNING**：运行中
     * - **EXPIRED**：已过期
     * - **CREATE_FAILED**：创建失败
     * - **UPGRADING**：变配中
     * - **UPGRADE_FAILED**：变配失败
     * @example `RUNNING`
     */
    "InstanceStatus"?: string;
    /**
     * 堡垒机实例所在的企业资源组的ID。
     * @example `rg-acfm26ougi****`
     */
    "ResourceGroupId"?: string;
    /**
     * 堡垒机实例的ID。
     * @example `bastionhost-cn-78v1ghxxxxx`
     */
    "InstanceId"?: string[];
    /**
     * 堡垒机实例的标签信息。
     */
    "Tag"?: {
        /**
         * 实例的标签键。
         * @example `test`
         */
        Key: string;
        /**
         * 实例的标签值。
         * @example `testapi`
         */
        Value: string;
    }[];
}
