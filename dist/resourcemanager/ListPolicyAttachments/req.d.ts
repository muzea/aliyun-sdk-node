export interface ListPolicyAttachmentsRequest {
    /**
     * 资源组ID或资源组所属的阿里云账号ID。取值为空表示列出当前账号下的所有授权记录。
     * @example `rg-001`
     */
    "ResourceGroupId"?: string;
    /**
     * 权限策略类型。取值为空表示列出所有类型的权限策略。
     * - Custom：自定义策略。
     * - System：系统策略。
     * @example `System`
     */
    "PolicyType"?: string;
    /**
     * 权限策略名称。
     * 长度为1~128个字符，可包含英文字母、数字和短横线（-）。
     * @example `AdministratorAccess`
     */
    "PolicyName"?: string;
    /**
     * 被授权对象类型。取值为空表示列出所有类型的被授权对象。
     * - IMSUser：RAM用户。
     * - IMSGroup：RAM用户组。
     * - ServiceRole：RAM角色。
     * @example `IMSUser`
     */
    "PrincipalType"?: string;
    /**
     * 被授权对象名称。
     * @example `alice@demo.onaliyun.com`
     */
    "PrincipalName"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 语言类型。系统权限策略的描述将以此语言返回。
     * - en：英文。
     * - zh-CN：中文。
     * - ja：日文。
     * @example `zh-CN`
     */
    "Language"?: string;
}
