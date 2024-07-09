export interface CreateDataServiceApiAuthorityRequest {
    /**
     * 租户ID。
     * @example `1004`
     */
    "TenantId"?: number;
    /**
     * 工作空间的ID。
     * @example `10003`
     */
    "ProjectId": number;
    /**
     * API的ID。
     * @example `10001`
     */
    "ApiId": number;
    /**
     * 被授权的工作空间ID。
     * @example `10002`
     */
    "AuthorizedProjectId": number;
    /**
     * 授权有限期结束时间，Unix时间戳，单位为s。例如1600531564，代表北京时间2020-09-20 00:06:04。
     * @example `1600531564`
     */
    "EndTime": number;
}
