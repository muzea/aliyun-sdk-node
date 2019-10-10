interface CloneDBInstanceRequest {
    /**
    * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看可用的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 实例存储类型，取值：
    * * **local_ssd**​/**ephemeral_ssd**：本地SSD盘；
    * * **cloud_ssd**：SSD云盘；
    * * **cloud_essd**：ESSD云盘。
    * @example `cloud_essd`
    */ "DBInstanceStorageType"?: string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    /**
    * 付费类型，取值：
    * * **Postpaid**：后付费（按量付费）；
    * * **Prepaid**：预付费（包年包月）。
    * @example `Postpaid`
    */ "PayType": string;
    /**
    * 可用区ID。
    * @example `cn-hangzhou-b`
    */ "ZoneId"?: string;
    /**
    * 实例规格，详见[实例规格表](~~26312~~)。
    * >默认规格和主实例一致。
    * @example `mysql.n1.micro.1`
    */ "DBInstanceClass"?: string;
    /**
    * 实例存储空间，单位：GB。每5GB进行递增，详见[实例规格表](~~26312~~)。
    * >默认存储空间和主实例一致。
    * @example `1000`
    */ "DBInstanceStorage"?: number;
    "DBInstanceDescription"?: string;
    /**
    * 数据库名称。
    * @example `testDB`
    */ "DbNames"?: string;
    /**
    * 实例的网络类型，取值：
    * * **VPC**：专有网络；
    * * **Classic**：经典网络。
    * >默认网络类型和主实例一致。
    * @example `VPC`
    */ "InstanceNetworkType"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxxxxx`
    */ "DBInstanceId"?: string;
    /**
    * 备份集ID。
    * 您可以通过[DescribeBackups](~~26273~~)接口获取备份列表。
    * >**BackupId**和**RestoreTime**两者至少传入一个。
    * @example `9026262`
    */ "BackupId"?: string;
    /**
    * 备份保留周期内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
    * >**BackupId**和**RestoreTime**两者至少传入一个。
    * @example `2011-06-11T16:00:00Z`
    */ "RestoreTime"?: string;
    /**
    * VPC ID。
    * @example `vpc-uf6f7l4fg90xxxxxxxxxx`
    */ "VPCId"?: string;
    /**
    * VSwitch ID。
    * @example `vsw-uf6adz52c2pxxxxxxxxxx`
    */ "VSwitchId"?: string;
    /**
    * 新实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
    * @example `172.16.201.69`
    */ "PrivateIpAddress"?: string;
    /**
    * 购买时长，取值：
    * * 当参数**Period**为**Year**时，UsedTime取值为**1~3**；
    * * 当参数**Period**为**Month**时，UsedTime取值为**1~9**。
    * > 若付费类型为**Prepaid**则该参数必须传入。
    * @example `1`
    */ "UsedTime"?: string;
    /**
    * 预付费实例为包年或者包月类型，取值：
    * * **Year**：包年；
    * * **Month**：包月。
    * > 若付费类型为**Prepaid**则该参数必须传入。
    * @example `Year`
    */ "Period"?: string;
    "ResourceGroupId"?: string;
    /**
    * 实例系列，取值：
    * * **Basic**：基础版；
    * * **HighAvailability**：高可用版；
    * * **AlwaysOn**：集群版；
    * * **Finance**：金融版（仅中国站支持）。
    * @example `HighAvailability`
    */ "Category"?: string;
    "ZoneIdSlave1"?: string;
    "ZoneIdSlave2"?: string;
    /**
    * 是否进行库表恢复，取值为**1**时表示进行库表恢复，否则不填。
    * @example `1`
    */ "RestoreTable"?: string;
    /**
    * 进行库表恢复时，指定恢复的库表信息。格式：
    * ```[{"type":"db","name":"<数据库1名称>","newname":"<新数据库1名称>","tables":[{"type":"table","name":"<数据库1内的表1名称>","newname":"<新的表1名称>"},{"type":"table","name":"<数据库1内的表2名称>","newname":"<新的表2名称>"}]},{"type":"db","name":"<数据库1名称>","newname":"<新数据库2名称>","tables":[{"type":"table","name":"<数据库2内的表3名称>","newname":"<新的表3名称>"},{"type":"table","name":"<数据库2内的表4名称>","newname":"<新的表4名称>"}]}]```
    * @example `[{"type":"db","name":"testdb1","newname":"testdb1_new","tables":[{"type":"table","name":"testdb1table1","newname":"testdb1table1_new"}]}]`
    */ "TableMeta"?: string;
}
export { CloneDBInstanceRequest };