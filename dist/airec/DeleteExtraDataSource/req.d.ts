export interface DeleteExtraDataSourceRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId": string;
    /**
     * 数据源类型。
     * 取值：
     * - **UserCustomDataSource**：用户数据源。
     * - **ItemCustomDataSource**：物品数据源。
     * - **BehaviorCustomDataSource**：行为数据源。
     * @example `UserCustomDataSource`
     */
    "type": string;
    /**
     * 数据源ID。
     * @example `123`
     */
    "dataSourceId": string;
}
