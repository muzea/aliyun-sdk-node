export interface ModifyDeviceAutoUpgradePolicyRequest {
    /**
     * 智能接入网关实例的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-1um5x5nwhilymw****`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sage62x022502****`
     */
    "SerialNumber": string;
    /**
     * 升级开始时间。升级开始时间使用cron表达式。
     * 例如：`0 0 4 1/1 * ?`表示从每月第一天上午4时开始，每天的上午4时执行升级操作。
     * @example `0 0 4 1/1 * ?`
     */
    "CronExpression"?: string;
    /**
     * 升级类型。取值：
     * - **scheduled**：定时升级。
     * - **boot**：开机自动升级。
     * - **manual**：手动升级。
     * @example `scheduled`
     */
    "UpgradeType": string;
    /**
     * 升级时间段。取值范围：**30~120**。
     * 单位：分钟。
     * @example `30`
     */
    "Duration"?: number;
    /**
     * 时区。取值：
     * **Asia/Shanghai** ：中国标准时间（北京）
     * **Asia/Hong_Kong** ：中国香港时间
     * **Asia/Tokyo** ：日本时间（东京）
     * **Australia/Sydney** ：澳洲时间（悉尼）
     * **Asia/Kuala_Lumpur** ：马来西亚时间（吉隆坡）
     * **Europe/Berlin** ：德国时间（柏林）
     * **Asia/Singapore** ：新加坡时间
     * **Asia/Jakarta** ：印度尼西亚时间（雅加达）
     * @example `Asia/Shanghai`
     */
    "TimeZone"?: string;
    /**
     * 指定要修改升级策略的软件类型。取值：
     * - **Device**：表示智能接入网关设备运行的操作系统软件。
     * - **Dpi**：表示智能接入网关设备运行的应用特征库软件。
     * @example `Device`
     */
    "VersionType"?: string;
}
