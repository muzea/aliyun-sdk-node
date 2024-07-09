export interface AssignUserRequest {
    /**
     * 门店ID列表。
     * @example `[s-dxsxxxxxx,s-dxsyyyyyyy]`
     */
    "Stores"?: string;
    /**
     * 阿里云子账号UID。
     * @example `1344***`
     */
    "UserId": string;
    /**
     * 用户类型，可选值：
     * - `USER_TYPE_COMPANY_ROOT`：高级商家管理员，商家和门店相关账号的增删改查；
     * - `USER_TYPE_COMPANY_ADMIN`：商家管理员，商家下的门店相关账号的增删改查；
     * - `USER_TYPE_STORE_ADMIN`：门店管理员，一个门店管理员可关联多个门店，但一个门店仅能关联一个门店管理员；
     * - `USER_TYPE_STORE_OPERATOR`：门店操作员，仅能关联一个门店；
     * - `USER_TYPE_GUEST`：没有任何权限的访客。
     * @example `USER_TYPE_COMPANY_OWNER`
     */
    "UserType": string;
    /**
     * 扩展参数
     * @example `{}`
     */
    "ExtraParams"?: string;
}
