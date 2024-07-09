export interface CreateUserRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 账户名称，可包含英文字母、数字、符号“_” 、“ .”、“@”、“-”，长度最大限制64字符。
     * @example `user_001`
     */
    "Username": string;
    /**
     * 账户展示名称，长度最大限制64字符。
     * @example `name_001`
     */
    "DisplayName"?: string;
    /**
     * 密码，具体格式要求参考密码策略。
     * @example `123456`
     */
    "Password"?: string;
    /**
     * 手机区号，格式为1～6位数字，不含"+"。
     * @example `86`
     */
    "PhoneRegion"?: string;
    /**
     * 手机号，格式为6～15位数字。
     * @example `12345678901`
     */
    "PhoneNumber"?: string;
    /**
     * 手机号是否验证，为可信手机号，手机号若设置此字段必须设置，无特殊业务可直接设置为true。
     * @example `true`
     */
    "PhoneNumberVerified"?: boolean;
    /**
     * 邮箱，邮箱前缀可包含大写英文字母、小写英文字母、数字、点、下划线或中划线，长度限制最长为64字符。
     * @example `example@example.com`
     */
    "Email"?: string;
    /**
     * 邮箱是否已验证，为可信邮箱，邮箱若设置此字段必须设置，无特殊业务可直接设置为true。
     * @example `true`
     */
    "EmailVerified"?: boolean;
    /**
     * 账户外部ID，用于与外部系统的关联，最大长度限制64字符，若不设置，默认设置为账户ID。
     * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "UserExternalId"?: string;
    /**
     * 主组织ID。
     * @example `ou_wovwffm62xifdziem7an7xxxxx`
     */
    "PrimaryOrganizationalUnitId": string;
    /**
     * 从属组织ID列表，账户可从属于多个组织。
     */
    "OrganizationalUnitIds"?: string[];
    /**
     * 描述，最大长度限制256字符。
     * @example `description text`
     */
    "Description"?: string;
    /**
     * 扩展字段列表。
     * @example `description`
     */
    "CustomFields"?: {
        /**
         * 扩展字段标识，需提前创建相关扩展字段，参考控制台扩展字段模块。
         * @example `age`
         */
        FieldName: string;
        /**
         * 扩展字段值，该值遵循对应扩展字段的相关属性限制。
         * @example `10`
         */
        FieldValue: string;
    }[];
    /**
     * 密码初始化配置。
     */
    "PasswordInitializationConfig"?: {
        /**
         * 密码初始化策略优先级，默认不生效，取值可选范围：
         * - global：全局优先，采用实例级别的密码初始化策略，即本次设置的密码初始化策略均无效，参考密码相关策略的密码初始化策略。
         * - custom：自定义优先，以当前定义的密码初始化策略为准，包括是否开启强制改密、密码初始化方式以及通知渠道。
         * @example `global`
         */
        PasswordInitializationPolicyPriority: string;
        /**
         * 强制修改密码状态，默认不启用，取值可选范围：
         * - enabled：开启。
         * - disabled：禁用。
         * @example `enabled`
         */
        PasswordForcedUpdateStatus: string;
        /**
         * 密码通知渠道列表。
         * @example `sms`
         */
        UserNotificationChannels: string[];
        /**
         * 密码初始化方式，取值可选范围：
         * - random：随机。
         * @example `random`
         */
        PasswordInitializationType: string;
    };
}
