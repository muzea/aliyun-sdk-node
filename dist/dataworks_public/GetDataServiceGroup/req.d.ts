export interface GetDataServiceGroupRequest {
    /**
     * 该字段已废弃。租户ID。
     * @example `10001`
     */
    "TenantId"?: number;
    /**
     * 工作空间的ID。
     * @example `10002`
     */
    "ProjectId": number;
    /**
     * 业务流程的ID。
     * @example `ds_123abc`
     */
    "GroupId": string;
}
