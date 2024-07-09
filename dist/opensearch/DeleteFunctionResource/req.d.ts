export interface DeleteFunctionResourceRequest {
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
     * 资源名称
     * @example `fg_json`
     */
    "resourceName": string;
}
