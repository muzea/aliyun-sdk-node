export interface GetSavedSearchRequest {
    /**
     * Project名称。
     * @example `aliyun-test-project`
     */
    "project": string;
    /**
     * 快速查询名称。
     * @example `savedsearch-name`
     */
    "savedsearchName": string;
}
