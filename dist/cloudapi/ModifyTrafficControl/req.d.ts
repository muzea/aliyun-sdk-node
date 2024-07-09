export interface ModifyTrafficControlRequest {
    /**
     * 流控策略ID
     * @example `tf123456`
     */
    "TrafficControlId": string;
    /**
     * 流控策略名称，支持大小写英文字母，中文，数字，下划线，长度4~50，且不能以下划线开头。
     * @example `流控测试`
     */
    "TrafficControlName"?: string;
    /**
     * 单位，可选值：
     * - **SECOND**：秒
     * - **MINUTE**：分钟
     * - **HOUR**：小时
     * - **DAY**：天
     * @example `HOUR`
     */
    "TrafficControlUnit"?: string;
    /**
     * 每个API默认流控值
     * @example `10000`
     */
    "ApiDefault"?: number;
    /**
     * 每个用户默认的流控值
     * @example `10000`
     */
    "UserDefault"?: number;
    /**
     * 每个app默认的流控值
     * @example `10000`
     */
    "AppDefault"?: number;
    /**
     * 流控描述信息
     * @example `流控测试描述`
     */
    "Description"?: string;
}
