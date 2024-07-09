export interface ListUsersResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 列表条数目。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 账户数据列表。
     */
    Users: {
        /**
         * 账户ID。
         * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
         */
        UserId: string;
        /**
         * 账户名。
         * @example `name001`
         */
        Username: string;
        /**
         * 账户显示名。
         * @example `display_name001`
         */
        DisplayName: string;
        /**
         * 密码是否已设置
         * @example `false`
         */
        PasswordSet: boolean;
        /**
         * 手机地区编号,示例：中国大陆手区号为86，不带 00 或 +。
         * @example `86`
         */
        PhoneRegion: string;
        /**
         * 账户手机号码。
         * @example `156xxxxxxx`
         */
        PhoneNumber: string;
        /**
         * 手机号是否已验证，true表示手机号已经过用户验证或被管理员设置为已验证，false表示未验证。
         * @example `true`
         */
        PhoneNumberVerified: boolean;
        /**
         * 账户邮箱。
         * @example `user@example.com`
         */
        Email: string;
        /**
         * 邮箱是否已验证，true表示邮箱已经过用户的验证或被管理员设置为已验证，false表示未验证。
         * @example `true`
         */
        EmailVerified: boolean;
        /**
         * 账户外部ID，用于外部数据与IDaaS账户的数据关联映射，默认为IDaaS账户ID。
         * 说明：外部ID在同一来源类型和来源ID下唯一。
         * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
         */
        UserExternalId: string;
        /**
         * 账户来源类型，取值可选范围：
         * - build_in：自建。
         * - ding_talk：钉钉导入。
         * - ad：AD导入。
         * - ldap：LDAP导入
         * @example `build_in`
         */
        UserSourceType: string;
        /**
         * 账户来源ID。
         * 自建类型默认为实例ID，其他类型，分别对应不同来源的企业ID，比如钉钉来源对应钉钉企业的corpId。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        UserSourceId: string;
        /**
         * 账户状态，取值可选范围：
         * - enabled： 启用中。
         * - disabled：禁用中。
         * @example `enabled`
         */
        Status: string;
        /**
         * 账户过期时间，Unix时间戳格式，单位为毫秒。
         * @example `1652085686179`
         */
        AccountExpireTime: number;
        /**
         * 密码过期时间，Unix时间戳格式，单位为毫秒。
         * @example `1652085686179`
         */
        PasswordExpireTime: number;
        /**
         * 账户注册时间，Unix时间戳格式，单位为毫秒。
         * @example `1652085686179`
         */
        RegisterTime: number;
        /**
         * 账户锁定过期时间，Unix时间戳格式，单位为毫秒。
         * @example `1652085686179`
         */
        LockExpireTime: number;
        /**
         * 账户创建时间，Unix时间戳格式，单位为毫秒。
         * @example `1652085686179`
         */
        CreateTime: number;
        /**
         * 账户最近一次更新时间，Unix时间戳格式，单位为毫秒。
         * @example `1652085686179`
         */
        UpdateTime: number;
        /**
         * 账户描述。
         * @example `测试账户`
         */
        Description: string;
        /**
         * 实例ID。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        InstanceId: string;
    }[];
}
