export interface GetHostGroupRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如  https:// devops.aliyun.com/organization/【OrgId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 主机组id
     * @example `21221`
     */
    "id": number;
}
