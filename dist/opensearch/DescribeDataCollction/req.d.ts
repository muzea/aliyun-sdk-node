export interface DescribeDataCollctionRequest {
    /**
     * 应用名称
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 数据采集ID
     * @example `286`
     */
    "dataCollectionIdentity": string;
}
