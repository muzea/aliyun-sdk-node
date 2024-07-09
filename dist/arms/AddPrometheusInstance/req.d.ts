export interface AddPrometheusInstanceRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Remote Write实例类型的名称。
     * @example `notificationpolicy_test`
     */
    "Name": string;
    /**
     * 实例类型， 目前仅支持Remote Write类型， 简写RW。
     * @example `RW`
     */
    "Type": string;
}
