export interface DescribeAuditLogConfigResponse {
    /**
     * 请求ID。
     * @example `F0983B43-B2EC-536A-8791-142B5CF1E9B6`
     */
    RequestId: string;
    /**
     * SQL审计的开启状态。取值说明：
     * - **on**：开启SQL审计。
     * - **off**：关闭SQL审计。
     * @example `on`
     */
    AuditLogStatus: string;
    /**
     * 集群ID。
     * @example `am-t4nj8619bz2w3****`
     */
    DBClusterId: string;
    /**
     * 访问被拒绝详细信息；只有Ram校验失败才会返回此字段
     * @example `{
        "PolicyType": "AccountLevelIdentityBasedPolicy",
        "AuthPrincipalOwnerId": "1*****************7",
        "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
        "AuthPrincipalType": "SubUser",
        "AuthPrincipalDisplayName": "2***************9",
        "NoPermissionType": "ImplicitDeny",
        "AuthAction": "adb:DescribeExcessivePrimaryKeys"
    }`
     */
    AccessDeniedDetail: string;
}
