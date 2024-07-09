export interface ListFunctionResourcesRequest {
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
     * 资源类型
     * @example `feature_generator`
     */
    "resourceType"?: string;
    /**
     * 输出等级
     * @example `detail`
     */
    "output"?: string;
    /**
     * 页码
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 分页大小
     * @example `10`
     */
    "pageSize"?: number;
}
