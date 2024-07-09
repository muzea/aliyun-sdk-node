export interface DescribeDeviceAutoUpgradePolicyResponse {
    /**
     * 升级类型。
     * - **scheduled**：定时升级。
     * - **boot**：开机自动升级。
     * - **manual**：手动升级。
     * @example `scheduled`
     */
    UpgradeType: string;
    /**
     * 时区。
     * @example `Asia/Shanghai`
     */
    TimeZone: string;
    /**
     * 智能接入网关设备序列号。
     * @example `sage62x022502****`
     */
    SerialNumber: string;
    /**
     * 请求ID。
     * @example `0E20FBB8-BCFC-4F5E-BD94-77FF6A2133D0`
     */
    RequestId: string;
    /**
     * 升级时间的上下偏差。单位：分钟。
     * @example `5`
     */
    Jitter: string;
    /**
     * 升级时间段。
     * 取值范围：**30~120**。
     * 单位：分钟。
     * @example `60`
     */
    Duration: string;
    /**
     * 升级开始时间。升级开始时间使用cron表达式。
     * 例如：`0 0 4 1/1 * ?`表示从每月第一天上午4时开始，每天执行升级操作。
     * @example `0 0 4 1/1 * ?`
     */
    CronExpression: string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-kxe2cv7hot7qrv****`
     */
    SmartAGId: string;
}
