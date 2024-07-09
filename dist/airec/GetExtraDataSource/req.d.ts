export interface GetExtraDataSourceRequest {
    /**
     * 实例ID
     * @example `airec-test`
     */
    "instanceId": string;
    /**
     * 数据源类型
     * UserCustomDataSource
     * ItemCustomDataSource
     * BehaviorCustomDataSource
     * SampleCustomDataSource
     * @example `UserCustomDataSource`
     */
    "type": string;
    /**
     * 数据源ID
     * @example `123`
     */
    "dataSourceId": string;
}
