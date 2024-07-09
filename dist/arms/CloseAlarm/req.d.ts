export interface CloseAlarmRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 告警ID。
     * @example `163`
     */
    "AlarmId": number;
    /**
     * 告警解决方案
     * @example `重启修复`
     */
    "Solution"?: string;
    /**
     * 处理人员ID
     * @example `2048065`
     */
    "HandlerId"?: number;
}
