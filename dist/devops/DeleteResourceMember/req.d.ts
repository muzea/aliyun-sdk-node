export interface DeleteResourceMemberRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * - 资源类型
     *    pipeline 流水线
     *   hostGroup 部署组
     * @example `pipeline`
     */
    "resourceType": string;
    /**
     * 资源Id
     * @example `123`
     */
    "resourceId": number;
    /**
     * 阿里云账号id
     * @example `2211221`
     */
    "accountId": string;
}
