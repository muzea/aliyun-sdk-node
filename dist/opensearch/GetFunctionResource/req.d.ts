export interface GetFunctionResourceRequest {
    /**
     * 应用ID
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 功能名称
     * @example `rank`
     */
    "functionName": string;
    /**
     * 实例名称
     * @example `fg_json`
     */
    "resourceName": string;
    /**
     * 输出等级
     * @example `detail`
     */
    "output"?: string;
}
