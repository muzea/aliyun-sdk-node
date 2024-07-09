export interface UpdateUserRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 账户ID。
     * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "UserId": string;
    /**
     * 账户名称，可包含英文字母、数字、符号“_” 、“ .”、“@”、“-”，长度最大限制64。
     * @example `username_test`
     */
    "Username"?: string;
    /**
     * 账户展示名称，长度最大限制64字符。
     * @example `test_name`
     */
    "DisplayName"?: string;
    /**
     * 手机地区编号,示例：中国大陆手区号为86，不带 00 或 +, 手机号若设置，此参数必填。
     * @example `86`
     */
    "PhoneRegion"?: string;
    /**
     * 手机号，格式为6～15位数字。
     * @example `156xxxxxxxxx`
     */
    "PhoneNumber"?: string;
    /**
     * 手机号是否验证，为可信手机号，手机号若设置此字段必须设置，无特殊业务可直接设置为true。
     * @example `true`
     */
    "PhoneNumberVerified"?: boolean;
    /**
     * 邮箱，邮箱前缀可包含大写英文字母、小写英文字母、数字、点、下划线或中划线。
     * @example `example@example.com`
     */
    "Email"?: string;
    /**
     * 邮箱是否验证，邮箱若设置此字段必须设置，无特殊业务可直接设置为true。
     * @example `true`
     */
    "EmailVerified"?: boolean;
    /**
     * 扩展字段对象列表。
     */
    "CustomFields"?: {
        /**
         * 扩展字段标识，需提前创建相关扩展字段，参考控制台扩展字段模块。
         * @example `nick_name`
         */
        FieldName: string;
        /**
         * 扩展字段值，该值遵循对应扩展字段的相关属性限制。
         * @example `test_value`
         */
        FieldValue: string;
        /**
         * 扩展字段操作类型，取值可选范围：
         * - add：新增账户扩展字段值。
         * - replace：替换已有账户扩展字段值，如扩展字段值不存在，会转换为add操作。
         * - remove：移除账户扩展字段值。
         * @example `add`
         */
        Operation: string;
    }[];
}
