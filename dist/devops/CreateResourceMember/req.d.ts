export interface CreateResourceMemberRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 资源类型pipeline 流水线hostGroup主机组
     * @example `pipeline`
     */
    "resourceType": string;
    /**
     * 阿里云账号id
     * @example `1111111111111`
     */
    "accountId": string;
    /**
     * 角色部署组 hostGroup
     * - user 成员，使用权限
     * - admin 管理员，使用编辑权限
     * -  owner 拥有者，所有权限
     * 流水线 pipeline
     * - owner 拥有者，所有权限
     * - admin  查看、运行、编辑权限
     * -  member 运行权限
     * - viewer 查看权限
     * @example `admin`
     */
    "roleName": string;
    /**
     * 资源id
     * @example `123`
     */
    "resourceId": number;
}
