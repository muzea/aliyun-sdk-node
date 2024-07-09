export interface ListPrivateAccessPolicesRequest {
    /**
     * 分页查询时显示的当前页的页码。取值：1~10000。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时设置的每页数量。取值：1~1000。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 内网访问策略名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `private_access_policy_name
    `
     */
    "Name"?: string;
    /**
     * 内网访问策略状态。取值：
     * - **Enabled**：开启。
     * - **Disabled**：关闭。
     * @example `Enabled`
     */
    "Status"?: string;
    /**
     * 内网访问策略动作。取值：
     * - **Block**：阻断。
     * - **Allow**：允许。
     * @example `Allow`
     */
    "PolicyAction"?: string;
    /**
     * 内网访问策略ID集合。最多可输入100个内网访问策略ID。
     */
    "PolicyIds"?: string[];
    /**
     * 用户组ID。取值来源：
     * - [ListUserGroups](~~ListUserGroups~~)：批量查询用户组。
     * - [CreateUserGroup](~~CreateUserGroup~~)：创建用户组。
     * @example `usergroup-6f1ef2fc56b6****`
     */
    "UserGroupId"?: string;
    /**
     * 内网访问应用ID。无法和内网访问标签ID同时过滤。取值来源：
     *  - [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~)：批量查询内网访问应用。
     *  - [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~)：创建内网访问应用。
     * @example `pa-application-e12860ef6c48****`
     */
    "ApplicationId"?: string;
    /**
     * 内网访问标签ID。无法和应用ID同时过滤。取值来源：
     *  - [ListPrivateAccessTags](~~ListPrivateAccessTags~~)：批量查询内网访问标签。
     *  - [CreatePrivateAccessTag](~~CreatePrivateAccessTag~~)：创建内网访问标签。
     * @example `tag-c0cb77857a99****`
     */
    "TagId"?: string;
    /**
     * 内网访问应用名称。
     * @example `办公`
     */
    "ApplicationName"?: string;
    /**
     * 标签名称。
     * @example `云产品`
     */
    "TagName"?: string;
}
