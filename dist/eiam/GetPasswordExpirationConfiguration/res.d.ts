export interface GetPasswordExpirationConfigurationResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 密码过期配置。
     */
    PasswordExpirationConfiguration: {
        /**
         * 密码过期配置状态，取值可选范围：
         * - enabled：开启。
         * - disabled：禁用。
         * @example `enabled`
         */
        PasswordExpirationStatus: string;
        /**
         * 密码有效时长，单位是天。
         * @example `180`
         */
        PasswordValidMaxDay: number;
        /**
         * 密码过期动作，取值可选范围：
         * - forbid\_login：禁止登录。
         * - force\_update\_password：强制修改密码。
         * - remind\_update\_password：提醒修改密码。
         * @example `forbid_login`
         */
        PasswordExpirationAction: string;
        /**
         * 密码过期通知状态，取值可选范围：
         * - enabled：开启。
         * - disabled：禁用。
         * @example `enabled`
         */
        PasswordExpirationNotificationStatus: string;
        /**
         * 密码过期通知渠道列表。
         * @example `login`
         */
        PasswordExpirationNotificationChannels: string[];
        /**
         * 密码过期通知时间，单位是天。
         * @example `7`
         */
        PasswordExpirationNotificationDuration: number;
        /**
         * 密码强制修改时间，单位是天。
         * @example `3`
         */
        PasswordForcedUpdateDuration: number;
    };
}
