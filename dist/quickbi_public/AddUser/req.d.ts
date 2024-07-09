export interface AddUserRequest {
    /**
     * 是否是管理员。取值范围：
     * - true：是
     * - false：否
     * @example `true`
     */
    "AdminUser"?: boolean;
    /**
     * 是否是权限管理员。取值范围：
     * - true：是
     * - false：否
     * @example `true`
     */
    "AuthAdminUser"?: boolean;
    /**
     * 组织成员的角色类型。取值范围：
     * - 1 ：开发者
     * - 2 ：访问者
     * - 3 ：分析师
     * @example `1`
     */
    "UserType": number;
    /**
     * 阿里云账号名称。
     * - 说明：如果是子账号，格式为『主账号：子账号』。例如：master_test@aliyun.com:subaccount
     * - 格式检查：最大长度50个字符。
     * @example `xxxxxx@163.com`
     */
    "AccountName": string;
    /**
     * 阿里云账号昵称。
     * - 格式检查：最大长度50个字符。
     * - 特殊格式校验：中英文数字 _ \ / | () ] \[
     * @example `张三`
     */
    "NickName": string;
    "RoleIds"?: string;
}
