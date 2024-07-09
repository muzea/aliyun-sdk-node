export interface CreateFlowTagRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 标签名称，最大长度20
     * @example `标签名称`
     */
    "name": string;
    /**
     * - \#1F9AEF蓝色
     * - \#E63A3A红色
     * - \#FA8C15 黄色
     * - \#15AD31 绿色
     * - \#7978E5 紫色
     * - \#8C8C8C 灰色
     * @example `#1F9AEF`
     */
    "color": string;
    /**
     * 标签分类id，0表示未分类
     * @example `111`
     */
    "flowTagGroupId": number;
}
