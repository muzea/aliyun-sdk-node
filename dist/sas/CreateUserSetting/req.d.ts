export interface CreateUserSettingRequest {
    /**
     * 访问源的IP地址。
     * @example `112.48.16.***`
     */
    "SourceIp"?: string;
    /**
     * 无效告警保留的天数。
     * @example `7`
     */
    "InvalidWarningKeepDays"?: number;
    /**
     * 报警通知级别列表。
     * @example `high,low`
     */
    "AlertLevels"?: string;
}
