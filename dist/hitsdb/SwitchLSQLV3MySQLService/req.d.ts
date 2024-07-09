export interface SwitchLSQLV3MySQLServiceRequest {
    /**
     * 实例ID。
     * @example `ld-bp1o3y0yme2i2****`
     */
    "InstanceId": string;
    /**
     * 操作类型
     * 取值：
     * - 1：开通
     * - 0：关闭
     * @example `1`
     */
    "ActionType": number;
}
