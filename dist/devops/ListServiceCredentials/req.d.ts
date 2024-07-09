export interface ListServiceCredentialsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如  https:// devops.aliyun.com/organization/【OrgId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 服务证书类型
     * @example `username_password  （用户名密码类型）`
     */
    "serviceCredentialType": string;
}
