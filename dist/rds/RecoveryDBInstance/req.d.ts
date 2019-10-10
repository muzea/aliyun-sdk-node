interface RecoveryDBInstanceRequest {
    "RegionId"?: string;
    /**
    * 数据库名，若指定多个数据库，按如下格式：{"原库名1":"新库名1","原库名2":"新库名2"}
    * >恢复到已有实例该参数必须传入。
    * @example `{sourceDbName1":"targetDbName1"}`
    */ "DbNames": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    /**
    * 新实例规格，详见[实例规格](~~26312~~)。
    * @example `rds.mysql.s2.large`
    */ "DBInstanceClass"?: string;
    /**
    * 新实例存储容量。
    * @example `5`
    */ "DBInstanceStorage"?: number;
    "DBInstanceDescription"?: string;
    /**
    * 新实例付费类型：
    * * **Postpaid**：后付费（按量付费）；
    * * **Prepaid**：预付费，（包年包月）。
    * @example `Postpaid`
    */ "PayType"?: string;
    /**
    * 新实例网络类型：
    * * **Classic**：经典网络；
    * * **VPC**：专有网络。
    * 默认与主实例网络类型一致。
    * @example `VPC`
    */ "InstanceNetworkType"?: string;
    /**
    * 原实例ID。
    * >* 按备份集恢复（即指定BackupId参数）时，本参数不是必须。
    * * 按时间点恢复（即指定RestoreTime参数）时，本参数为必须。
    * @example `rm-xxxxxxxx1`
    */ "DBInstanceId"?: string;
    /**
    * 目标实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "TargetDBInstanceId"?: string;
    /**
    * 备份集ID，可通过查询备份列表接口[DescribeBackups](~~26273~~)获取。
    * 指定此参数时，**DBInstanceId**参数为可选。
    * >**BackupId**和**RestoreTime**两者至少传入一个。
    * @example `293044600`
    */ "BackupId"?: string;
    /**
    * 备份保留周期内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
    * 指定此参数时，**DBInstanceId**参数为必须。
    * >**BackupId**和**RestoreTime**两者至少传入一个。
    * @example `2011-06-11T16:00:00Z`
    */ "RestoreTime"?: string;
    /**
    * VPC ID。
    * @example `vpc-xxxxxxxxxxx`
    */ "VPCId"?: string;
    /**
    * VSwitch ID，多个值用英文逗号（,）隔开。
    * @example `vsw-xxxxxxxxxxx`
    */ "VSwitchId"?: string;
    /**
    * 设置实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
    * @example `vpc-xxxxxxxxxxx`
    */ "PrivateIpAddress"?: string;
    /**
    * 指定购买时长，取值：
    * * 当参数**Period**为**Year**时，UsedTime取值为**1~3**；
    * * 当参数**Period**为**Month**时，UsedTime取值为**1~9**。
    * > 若付费类型为**Prepaid**则该参数必须传入。
    * @example `Prepaid`
    */ "UsedTime"?: string;
    /**
    * 指定预付费实例为包年或者包月类型，取值：
    * * **Year**：包年；
    * * **Month**：包月。
    * > 若付费类型为**Prepaid**则该参数必须传入。
    * @example `Prepaid`
    */ "Period"?: string;
    "ResourceGroupId"?: string;
    "DBInstanceStorageType"?: string;
}
export { RecoveryDBInstanceRequest };