export interface DeleteAppGroupRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命名空间ID，在控制台的**命名空间**页面中获取。
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    "Namespace": string;
    /**
     * 应用ID，在控制台的**应用管理**页面中获取。
     * @example `testSchedulerx.defaultGroup`
     */
    "GroupId": string;
    /**
     * 是否删除应用分组中的任务。取值如下：
     * - **true**：删除。
     * - **false**：不删除。
     * @example `true`
     */
    "DeleteJobs"?: boolean;
}
