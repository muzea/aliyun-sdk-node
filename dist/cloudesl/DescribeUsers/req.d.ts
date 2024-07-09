export interface DescribeUsersRequest {
    /**
     * 用户类型，可选值：
     * - `USER_TYPE_COMPANY_OWNER`：商家主账号
     * - `USER_TYPE_COMPANY_ROOT`：高级商家管理员
     * - `USER_TYPE_COMPANY_ADMIN`：商家管理员
     * - `USER_TYPE_STORE_ADMIN`：门店管理员
     * - `USER_TYPE_STORE_OPERATOR`：门店操作员
     * - `USER_TYPE_GUEST`：没有任何权限的访客。
     * @example `USER_TYPE_COMPANY_OWNER`
     */
    "UserType"?: string;
    /**
     * 分页参数：当前页码，默认值1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 阿里云子账号UID。
     * @example `1344***`
     */
    "UserId"?: string;
    /**
     * 用户姓名。
     * @example `张三`
     */
    "UserName"?: string;
    /**
     * 分页参数：每页显示条数，默认值10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 系统保留字段，请忽略；
     * @example `{}`
     */
    "ExtraParams"?: string;
}
