export interface UpdateBackupPolicyRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称ID。
     * @example `pxc-hzjasdyuoo`
     */
    "DBInstanceName": string;
    /**
     * 备份周期。至少需要指定2天，7位数数值，从左到右每一位数值代表周一到周日是否开启备份。取值0代表不备份，取值1代表备份：
     * - 第一位数值：周一
     * - 第二位数值：周二
     * - 第三位数值：周三
     * - 第四位数值：周四
     * - 第五位数值：周五
     * - 第六位数值：周六
     * - 第七位数值：周日
     * @example `1001000`
     */
    "BackupPeriod"?: string;
    /**
     * 每天备份开启时间，UTC时间。
     * @example `03:00Z`
     */
    "BackupPlanBegin"?: string;
    /**
     * 备份集保留时间，单位天。
     * @example `30`
     */
    "BackupSetRetention"?: number;
    /**
     * 备份种类，目前只支持“0”，表示快速备份。
     * @example `0`
     */
    "BackupType"?: string;
    /**
     * 备份手段，枚举值
     * - **P**：物理备份
     * - **L**：逻辑备份
     * @example `P`
     */
    "BackupWay"?: string;
    /**
     * 当实例总空间使用率超过80%或剩余空间不足50 GB时，是否强制清理Binlog。从最早的开始清理，直到总空间使用率降到80%以下且剩余空间大于50 GB。取值如下：
     * - **1**：是
     * - **0**：否
     * @example `1`
     */
    "ForceCleanOnHighSpaceUsage"?: number;
    /**
     * 是否开启备份，固定值1，表示开启。
     * @example `1`
     */
    "IsEnabled"?: number;
    /**
     * 日志备份本地保留小时数， 范围为0到7×24小时， 0表示不保留，默认7小时。
     * @example `7`
     */
    "LocalLogRetention"?: number;
    /**
     * 日志备份远程保留天数（ 7~730） 单位天， 默认7天。
     * @example `7`
     */
    "RemoveLogRetention"?: number;
    /**
     * 本地日志最大空间使用率，参数大小为0~50，此为循环空间，默认为30。
     * @example `30`
     */
    "LogLocalRetentionSpace"?: number;
    /**
     * 冷数据备份间隔天数，取值范围为1~59。
     * @example `30`
     */
    "ColdDataBackupInterval"?: number;
    /**
     * 冷数据备份保留天数，取值范围为30~730。
     * @example `30`
     */
    "ColdDataBackupRetention"?: number;
    /**
     * 本地Binlog保留个数，默认为60，取值范围为6~100。
     * @example `60`
     */
    "LocalLogRetentionNumber"?: number;
    /**
     * 是否开启跨地域数据备份，默认为false。
     * @example `false`
     */
    "IsCrossRegionDataBackupEnabled"?: boolean;
    /**
     * 是否开启跨地域日志备份，默认为false。
     * @example `false`
     */
    "IsCrossRegionLogBackupEnabled"?: boolean;
    /**
     * 跨地域备份的目标地域。
     * @example `cn-shanghai`
     */
    "DestCrossRegion"?: string;
    /**
     * 跨地域数据备份的保存时间，单位：天。
     * @example `30`
     */
    "CrossRegionDataBackupRetention"?: number;
    /**
     * 跨地域日志备份的保存时间，单位：天。
     * @example `30`
     */
    "CrossRegionLogBackupRetention"?: number;
}
