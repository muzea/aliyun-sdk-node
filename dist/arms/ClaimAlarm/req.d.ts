export interface ClaimAlarmRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 告警ID。
     * @example `30`
     */
    "AlarmId": number;
    /**
     * 处理人员ID
     * @example `2046076`
     */
    "HandlerId"?: number;
}
