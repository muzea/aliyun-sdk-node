export interface SetPasswordExpirationConfigurationRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 密码过期配置状态，取值可选范围：
     * - enabled：开启。
     * - disabled：禁用。
     * @example `enabled`
     */
    "PasswordExpirationStatus": string;
    /**
     * 密码有效时长，单位是天。当PasswordExpirationStatus取值为enabled时必传。
     * @example `180`
     */
    "PasswordValidMaxDay"?: number;
    /**
     * 密码过期动作。当PasswordExpirationStatus取值为enabled时必传，取值可选范围：
     * - forbid\_login：禁止登录。
     * - force\_update\_password：强制修改密码。
     * - remind\_update\_password：提醒修改密码。
     * @example `force_update_password`
     */
    "PasswordExpirationAction"?: string;
    /**
     * 密码过期通知状态，取值可选范围：
     * - enabled：开启。
     * - disabled：禁用。
     * @example `enabled`
     */
    "PasswordExpirationNotificationStatus"?: string;
    /**
     * 密码过期通知渠道列表，当PasswordExpirationNotificationStatus取值为enabled时必传。
     * @example `login`
     */
    "PasswordExpirationNotificationChannels"?: string[];
    /**
     * 密码过期通知时间，单位是天。当PasswordExpirationNotificationStatus取值为enabled时必传。
     * @example `7`
     */
    "PasswordExpirationNotificationDuration"?: number;
    /**
     * 密码强制修改时间，单位是天。当前字段取值要比PasswordExpirationNotificationDuration大。
     * @example `7`
     */
    "PasswordForcedUpdateDuration"?: number;
}
