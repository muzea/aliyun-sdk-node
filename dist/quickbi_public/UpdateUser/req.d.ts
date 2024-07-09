export interface UpdateUserRequest {
    /**
     * 待更新的用户ID。此处的用户ID为Quick BI的UserID，而非阿里云的UID。
     * @example `fe67f61a35a94b7da1a34ba174a7****`
     */
    "UserId": string;
    /**
     * 是否赋予组织管理员角色。取值范围：
     * - true：是
     * - false：否
     * <notice>参数已过期不推荐使用，当传入RoleIds 时该参数无效。</notice>
     * @example `true`
     */
    "AdminUser"?: boolean;
    /**
     * 是否赋予组织权限管理员角色。取值范围：
     * - true：是
     * - false：否
     * <notice>参数已过期不推荐使用，当传入RoleIds 时该参数无效。</notice>
     * @example `true`
     */
    "AuthAdminUser"?: boolean;
    /**
     * 组织成员的用户类型。取值范围：
     * - 1 ：开发者
     * - 2 ：访问者
     * - 3 ：分析师
     * @example `1`
     */
    "UserType"?: number;
    /**
     * 昵称。
     * - 格式检查：最大长度50个字符。
     * - 特殊格式校验：中英文数字 _ \ / | () ] [
     * @example `小张`
     */
    "NickName"?: string;
    /**
     * 用户绑定的预置或自定义组织角色ID，用英文逗号“,”分割，最多3个。取值范围：
     * - 组织管理员（预置角色）：111111111
     * - 权限管理员（预置角色）：111111112
     * - 普通用户（预置角色）：111111113
     * @example `111111111,456`
     */
    "RoleIds"?: string;
    /**
     * 用户状态：
     * * **false**：激活
     * * **true**：失效
     * @example `false`
     */
    "IsDeleted"?: boolean;
}
