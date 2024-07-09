export interface UpdateAccessControlListResponse {
    /**
     * HTTP请求状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `ABCD-1234-5678-EFGH`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `ILLEGAL.MilvusCidrFormat`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `The format of cidr is illegal.`
     */
    ErrMessage: string;
    /**
     * 返回数据。
     * @example `true`
     */
    Data: boolean;
    /**
     * 权限校验失败详情。
     * @example `{     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }`
     */
    AccessDeniedDetail: string;
}
