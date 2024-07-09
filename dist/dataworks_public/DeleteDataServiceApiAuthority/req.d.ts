export interface DeleteDataServiceApiAuthorityRequest {
    /**
     *  该字段已废弃。租户的ID。
     * @example `10001`
     */
    "TenantId"?: number;
    /**
     * 工作空间的ID。
     * @example `10002`
     */
    "ProjectId": number;
    /**
     * API的ID。
     * @example `10003`
     */
    "ApiId": number;
    /**
     * 被取消授权的工作空间ID。
     * @example `10004`
     */
    "AuthorizedProjectId": number;
}
