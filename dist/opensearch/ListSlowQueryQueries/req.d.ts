export interface ListSlowQueryQueriesRequest {
    /**
     * 应用名称
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 优化建议ID
     * @example `0`
     */
    "categoryIndex": string;
}
