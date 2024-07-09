export interface ListDataCollectionsRequest {
    /**
     * 应用名称
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 页码，默认 pageNumber = 1
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 每页返回数目，默认 pageSize = 10
     * @example `10`
     */
    "pageSize"?: number;
}
