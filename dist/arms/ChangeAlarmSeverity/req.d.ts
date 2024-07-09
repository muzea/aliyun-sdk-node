export interface ChangeAlarmSeverityRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 告警ID。
     * @example `155`
     */
    "AlarmId": number;
    /**
     * 告警等级。告警严重程度从P4、P3、P2、P1逐级上升。
     * @example `P1`
     */
    "Severity": string;
    /**
     * 处理人员ID
     * @example `2046076`
     */
    "HandlerId"?: number;
}
