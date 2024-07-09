export interface ListPrivateAccessTagsRequest {
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
     * 内网访问标签名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `tag_name`
     */
    "Name"?: string;
    /**
     * 内网访问标签ID集合。最多可输入100个内网访问标签ID。
     */
    "TagIds"?: string[];
    /**
     * 内网访问应用ID。取值来源：
     * - [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~)：批量查询内网访问应用。
     * - [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~)：创建内网访问应用。
     * @example `pa-application-e12860ef6c48****`
     */
    "ApplicationId"?: string;
    /**
     * 内网访问策略ID。取值来源：
     * - [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~)：批量查询内网访问策略。
     * - [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~)：创建内网访问策略。
     * @example `pa-policy-54a7838a48bf****`
     */
    "PolicyId"?: string;
    /**
     * 简单查询模式。如果值为true，表示不需要查询PolicyId字段。
     * @example `true`
     */
    "SimpleMode"?: boolean;
}
