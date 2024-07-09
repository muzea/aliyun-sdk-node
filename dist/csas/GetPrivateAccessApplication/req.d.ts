export interface GetPrivateAccessApplicationRequest {
    /**
     * 内网访问应用ID。取值来源：
     * - [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~)：批量查询内网访问应用。
     * - [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~)：创建内网访问应用。
     * @example `pa-application-e12860ef6c48****`
     */
    "ApplicationId": string;
}
