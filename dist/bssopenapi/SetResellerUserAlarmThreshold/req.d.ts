export interface SetResellerUserAlarmThresholdRequest {
    /**
     * 预警类型：quota_low_balance（代表Quota低额预警）
     * @example `quota_low_balance`
     */
    "AlarmType": string;
    /**
     * 该预警类型下的用户预警规则列表，不传代表没有预警阈值
     * @example `[{\"denominator\":100,\"numerator\":30,\"thresholdType\":1}]`
     */
    "AlarmThresholds"?: string;
}
