export interface UpdateVariableGroupRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 变量组名称
     * @example `变量组`
     */
    "name": string;
    /**
     * 变量组描述
     * @example `变量组描述`
     */
    "description"?: string;
    /**
     * 变量信息JSON字符串 isEncrypted 是否加密 name 变量名称 value 变量值
     * @example `[{"isEncrypted":true,"name":"name1","value":"vaue1"}]`
     */
    "variables": string;
    /**
     * 变量组id
     * @example `123`
     */
    "id": number;
}
