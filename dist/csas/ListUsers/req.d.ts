export interface ListUsersRequest {
    /**
     * 分页查询时显示的当前页的页码。取值：1~10000。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时设置的每页数量。取值：1~500。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 模糊匹配用户名。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）、星号（*）、at（@）和空格。
     * @example `王先生`
     */
    "FuzzyUsername"?: string;
    /**
     * 精确匹配用户名。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）、星号（*）、at（@）和空格。
     * @example `王先生@alibaba.com`
     */
    "PreciseUsername"?: string;
    /**
     * 用户ID集合。
     */
    "SaseUserIds"?: string[];
    /**
     * 用户状态。取值：
     * - **Enabled**：启用。
     * - **Disabled**：禁用。
     * @example `Enabled`
     */
    "Status"?: string;
    /**
     * 用户所属部门。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、半角逗号（,）、半角分号（;）、短划线（-）、下划线（_）、分隔号（/）、at（@）和空格。
     * @example `测试部`
     */
    "Department"?: string;
}
