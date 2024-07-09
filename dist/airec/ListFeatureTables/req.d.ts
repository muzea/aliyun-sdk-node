export interface ListFeatureTablesRequest {
    /**
     * 实例ID
     * @example `airec-test`
     */
    "instanceId": string;
    /**
     * 特征表类型
     * UserFeatureTable
     * ItemFeatureTable
     * @example `UserFeatureTable`
     */
    "type"?: string;
    /**
     * 特征更新频率
     * @example `1`
     */
    "updateFrequency"?: string;
    /**
     * 数据源Id
     * @example `1`
     */
    "dataSourceId"?: string;
}
