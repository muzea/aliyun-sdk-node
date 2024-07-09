export interface CreateFunctionTaskRequest {
    /**
     * 应用名称
     * @example `app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 功能名称
     * @example `ctr`
     */
    "functionName": string;
    /**
     * 实例名称
     * @example `ctr_test`
     */
    "instanceName": string;
}
