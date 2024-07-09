export interface BlockAlarmNotificationRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 告警ID。
     * @example `133`
     */
    "AlarmId": number;
    /**
     * 屏蔽时间，单位秒
     * @example `180`
     */
    "Timeout": number;
    /**
     * 处理人员ID
     * @example `2044049`
     */
    "HandlerId"?: number;
}
