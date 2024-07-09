export interface RecoveryDBInstanceRequest {
    /**
     * 新实例规格。详情请参见[实例规格](~~26312~~)。
     * @example `mssql.x4.medium.s1`
     */
    "DBInstanceClass"?: string;
    /**
     * 新实例存储容量。单位：GB。详情请参见[实例规格](~~26312~~)。
     * > 新实例的磁盘空间不能小于原实例的磁盘空间。
     * @example `40`
     */
    "DBInstanceStorage"?: number;
    /**
     * 新实例付费类型：
     * * **Postpaid**：后付费（按量付费）
     * * **Prepaid**：预付费（包年包月）
     * @example `Postpaid`
     */
    "PayType"?: string;
    /**
     * 新实例网络类型：
     * * **Classic**：经典网络
     * * **VPC**：专有网络
     * 默认与原实例网络类型一致。
     * @example `VPC`
     */
    "InstanceNetworkType"?: string;
    /**
     * 原实例ID。
     * > * 按备份集恢复（即指定BackupId参数）时，本参数不是必须项。
     * > * 按时间点恢复（即指定RestoreTime参数）时，本参数为必须项。
     * @example `rm-bp18****`
     */
    "DBInstanceId"?: string;
    /**
     * 目标实例ID。
     * @example `rm-bp17****`
     */
    "TargetDBInstanceId"?: string;
    /**
     * 数据库名称，恢复数据至新实例时格式为：`原库名1,新库名2`。
     * > 如需恢复到已有实例，请参见[CopyDatabaseBetweenInstances](~~2628854~~)。
     * @example `test1,test2`
     */
    "DbNames": string;
    /**
     * 备份集ID，可通过查询备份列表接口DescribeBackups获取。
     * 指定此参数时，**DBInstanceId**参数为可选。
     * >**BackupId**和**RestoreTime**两者至少传入一个。
     * @example `29304****`
     */
    "BackupId"?: string;
    /**
     * 备份保留周期内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * 指定此参数时，**DBInstanceId**参数为必须。
     * >**BackupId**和**RestoreTime**两者至少传入一个。
     * @example `2011-06-11T16:00:00Z`
     */
    "RestoreTime"?: string;
    /**
     * 新实例专有网络VPC ID。
     * @example `vpc-****`
     */
    "VPCId"?: string;
    /**
     * 新实例虚拟交换机ID，多个值用半角逗号（,）隔开。
     * @example `vsw-****`
     */
    "VSwitchId"?: string;
    /**
     * 设置新实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
     * @example `172.XX.XX.69`
     */
    "PrivateIpAddress"?: string;
    /**
     * 指定新实例购买时长，取值：
     * * 当参数**Period**为**Year**时，**UsedTime**取值为**1~3**。
     * * 当参数**Period**为**Month**时，**UsedTime**取值为**1~9**。
     * > 若付费类型为**Prepaid**则该参数必须传入。
     * @example `1`
     */
    "UsedTime"?: string;
    /**
     * 指定新的预付费实例为包年或者包月类型，取值：
     * * **Year**：包年
     * * **Month**：包月
     * > 若参数**PayType**=**Prepaid**，该参数必须传入。
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 新实例存储类型，取值：
     * * **local\_ssd/ephemeral\_ssd**：本地SSD盘
     * * **cloud_ssd**：SSD云盘
     * * **cloud_essd**：ESSD云盘
     * @example `cloud_essd`
     */
    "DBInstanceStorageType"?: string;
}
