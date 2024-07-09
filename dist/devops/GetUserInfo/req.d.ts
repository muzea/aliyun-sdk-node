export interface GetUserInfoRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * ><notice>
     * 与其他接口不同在于，此处的企业ID不是必传的
     * - 不传企业ID，返回的name为个人设置中姓名
     * - 传企业ID，返回的name为用户企业姓名></notice>
     * @example `61e54b0e0bb300d827e1ae27`
     */
    "organizationId"?: string;
}
