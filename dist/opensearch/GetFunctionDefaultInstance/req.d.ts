export interface GetFunctionDefaultInstanceRequest {
    /**
     * 应用名称
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 功能名称
     * @example `ctr`
     */
    "functionName": string;
}
