export interface PatchUserRequest {
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
     * 账户ID。
     * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "userId": string;
    /**
     * 请求body。
     * @example `user_001`
     */
    "body"?: {
        /**
         * 账户名。
         * @example `name001`
         */
        username: string;
        /**
         * 账户展示名。
         * @example `display_name001`
         */
        displayName: string;
        /**
         * 手机地区编号,示例：中国大陆手区号为86，不带 00 或 +, 手机号若设置，此参数必填。
         * @example `86`
         */
        phoneRegion: string;
        /**
         * 账户手机号。
         * @example `156xxxxxxx`
         */
        phoneNumber: string;
        /**
         * 手机号是否验证，手机号若设置此字段必须设置，无特殊业务可直接设置为true。
         * @example `true`
         */
        phoneNumberVerified: boolean;
        /**
         * 账户邮箱。
         * @example `example@example.com`
         */
        email: string;
        /**
         * 邮箱是否验证，邮箱若设置此字段必须设置，无特殊业务可直接设置为true。
         * @example `true`
         */
        emailVerified: boolean;
        /**
         * 账户扩展字段列表。
         */
        customFields: {
            /**
             * 字段操作类型，已废弃，请采用operation替换使用。
             * @example `replace`
             */
            operator: string;
            /**
             * 扩展字段标识，类型和值域可通过控制台查看对应扩展字段值的详细信息。
             * @example `age`
             */
            fieldName: string;
            /**
             * 扩展字段值。
             * @example `test_value`
             */
            fieldValue: string;
            /**
             * 字段操作类型，取值可选范围：
             * - add：添加。
             * - replace：替换。若对应扩展字段无设置值，会转换为add操作。
             * - remove：移除。
             * @example `replace`
             */
            operation: string;
        }[];
    };
}
