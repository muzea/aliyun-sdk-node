export interface CreateServiceAuthRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如  https:// devops.aliyun.com/organization/【OrgId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 服务授权类型，目前只支持RAM
     * @example `RAM  （阿里云RAM类型）`
     */
    "serviceAuthType": string;
}
