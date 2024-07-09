export interface DeleteSavedSearchRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 待删除的快速查询名称。
     * @example `test-savedsearch-name`
     */
    "savedsearchName": string;
}
