export interface CreateUserRequest {
    /**
     * 认证信息。
     * 格式：Bearer ${access_token}。
     * 示例：Bearer ATxxxx。
     * @example `Bearer AT8csE2seYxxxxxij`
     */
    "Authorization": string;
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "instanceId": string;
    /**
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "applicationId": string;
    /**
     * 请求body。
     * @example `app_xx001`
     */
    "body"?: {
        /**
         * 账户名称，可包含英文字母、数字、符号“_” 、“ .”、“@”、“-”，长度最大限制64字符。
         * @example `name001`
         */
        username: string;
        /**
         * 账户展示名。长度限制最长为64字符。
         * @example `display_name001`
         */
        displayName: string;
        /**
         * 账户密码，密码规则参考IDaaS控制台密码策略。
         * @example `xxxxx`
         */
        password: string;
        /**
         * 手机地区编号,示例：中国大陆手区号为86，不带 00 或 +, 手机号若设置，此参数必填。
         * @example `86`
         */
        phoneRegion: string;
        /**
         * 账户手机号，格式为6～15位数字。
         * @example `156xxxxxxx`
         */
        phoneNumber: string;
        /**
         * 手机号是否验证，手机号若设置此字段必须设置，无特殊业务可直接设置为true。
         * @example `true`
         */
        phoneNumberVerified: boolean;
        /**
         * 邮箱，邮箱前缀可包含大写英文字母、小写英文字母、数字、点、下划线或中划线，长度限制最长为64字符。
         * @example `example@example.com`
         */
        email: string;
        /**
         * 邮箱是否验证，邮箱若设置此字段必须设置，无特殊业务可直接设置为true。
         * @example `true`
         */
        emailVerified: boolean;
        /**
         * 账户外部ID，用于与外部系统的关联，最大长度限制64字符，若不设置，默认设置为账户ID。
         * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
         */
        userExternalId: string;
        /**
         * 主组织ID。
         * @example `ou_wovwffm62xifdziem7an7xxxxx`
         */
        primaryOrganizationalUnitId: string;
        /**
         * 账户描述，长度限制最长为256字符。
         * @example `测试账户`
         */
        description: string;
        /**
         * 密码初始化配置。
         */
        passwordInitializationConfig: {
            /**
             * 密码初始化策略优先级，默认不生效，取值可选范围：
             * - global：全局优先，采用实例级别的密码初始化策略，即本次设置的密码初始化策略均无效，参考密码相关策略的密码初始化策略。
             * - custom：自定义优先，以当前定义的密码初始化策略为准，包括是否开启强制改密、密码初始化方式以及通知渠道。
             * @example `global`
             */
            passwordInitializationPolicyPriority: string;
            /**
             * 强制修改密码状态,默认不启用，取值可选范围：
             * - enabled：开启。
             * - disabled：禁用。
             * @example `enabled`
             */
            passwordForcedUpdateStatus: string;
            /**
             * 密码通知渠道，取值可选范围：
             * - email：邮件。
             * - sms：短信。
             * @example `sms`
             */
            userNotificationChannels: string[];
            /**
             * 密码初始化方式，取值可选范围：
             * - random：随机。
             * @example `random`
             */
            passwordInitializationType: string;
        };
        /**
         * 账户扩展字段列表。
         */
        customFields: {
            /**
             * 扩展字段标识。类型和值域可通过控制台查看对应扩展字段值的详细信息。
             * @example `age`
             */
            fieldName: string;
            /**
             * 扩展字段值。
             * @example `fieldValue_001`
             */
            fieldValue: string;
        }[];
    };
}
