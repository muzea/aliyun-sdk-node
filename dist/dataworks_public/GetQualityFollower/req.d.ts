export interface GetQualityFollowerRequest {
    /**
     * 引擎或者数据源的名称。
     * @example `autotest`
     */
    "ProjectName": string;
    /**
     * 分区表达式的ID。
     * @example `1234`
     */
    "EntityId": number;
    /**
     * Dataworks工作空间的ID。
     * @example `27`
     */
    "ProjectId": number;
}
