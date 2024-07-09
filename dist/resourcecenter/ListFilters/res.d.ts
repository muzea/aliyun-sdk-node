export interface ListFiltersResponse {
    /**
     * 请求ID。
     * @example `AA39FB9C-CB74-5E73-8DFE-3A2B096F0759`
     */
    RequestId: string;
    /**
     * 筛选条件。
     */
    Filters: {
        /**
         * 筛选条件名称。
         * @example `我管理的设备`
         */
        FilterName: string;
        /**
         * 筛选条件。
         * @example `{
          "regions": [],
          "tagFilters": [
            [{ "type": "notContainTagKey", "tagKey": "xxx", "tagValue": "" }],
            [{ "tagKey": "xxx", "tagValue": "xxx" }]
          ],
          "resourceTypes": [
            "ACS::ECS::AutoSnapshotPolicy"
          ]
        }`
         */
        FilterConfiguration: string;
    }[];
    /**
     * 默认筛选条件名称。
     * @example `我的筛选条件`
     */
    DefaultFilterName: string;
}
