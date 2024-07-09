export interface ListUserGroupsRequest {
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
     * 用户组ID集合。最多可输入100个用户组ID。
     */
    "UserGroupIds"?: string[];
    /**
     * 用户组名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `user_group_name`
     */
    "Name"?: string;
    /**
     * 用户组属性的值。长度为1~128个字符。
     * @example `username`
     */
    "AttributeValue"?: string;
    /**
     * 内网访问策略ID。取值来源：
     * - [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~)：批量查询内网访问策略。
     * - [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~)：创建内网访问策略。
     * @example `pa-policy-54a7838a48bf****`
     */
    "PAPolicyId"?: string;
}
