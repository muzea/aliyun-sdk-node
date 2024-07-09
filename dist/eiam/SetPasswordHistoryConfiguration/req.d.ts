export interface SetPasswordHistoryConfigurationRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 密码历史配置状态，取值可选范围：
     * - enabled：开启。
     * - disabled：禁用。
     * @example `enabled`
     */
    "PasswordHistoryStatus": string;
    /**
     * 保留最近密码记录数。当PasswordHistoryStatus取值为enabled时必传。
     * @example `3`
     */
    "PasswordHistoryMaxRetention"?: number;
}
