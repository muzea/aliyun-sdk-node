interface CheckCreateDdrDBInstanceRequest {
    /**
    * 目的实例地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 目的数据库类型，取值：**MySQL**。
    * >当前仅RDS for MySQL支持跨地域备份。
    * @example `MySQL`
    */ "Engine": string;
    /**
    * 目的数据库版本，取值：
    * * **5.6**；
    * * **5.7**。
    * @example `5.6`
    */ "EngineVersion": string;
    /**
    * 目的实例规格，详见[实例规格表](~~26312~~)。
    * @example `rds.mysql.s1.small`
    */ "DBInstanceClass": string;
    /**
    * 目的实例存储空间，取值： **5~2000**。
    * 每5G进行递增，单位：GB。详见[实例规格表](~~26312~~)。
    * @example `20`
    */ "DBInstanceStorage": number;
    /**
    * 恢复方式，取值：
    * * **0**：基于备份集恢复，您还需要传入参数**BackupSetID**；
    * * **1**：基于时间点恢复，您还需要传入参数**RestoreTime**、**SourceRegion**、**SourceDBInstanceName**。
    * 默认值：**0**。
    * @example `0`
    */ "RestoreType": string;
    "OwnerId"?: number;
    /**
    * 基于备份集恢复时，使用的备份集的ID。可以通过接口[DescribeCrossRegionBackups](~~121733~~)查看备份集ID。
    * >**RestoreTyp**e=**0**时必传。
    * @example `14358`
    */ "BackupSetId"?: string;
    "BackupSetType"?: string;
    "BackupSetRegion"?: string;
    /**
    * 基于时间点恢复时，要恢复的时间节点，需要早于当前时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
    * >**RestoreType**=**1**时必传 。
    * @example `2019-05-30T03:29:10Z`
    */ "RestoreTime"?: string;
    /**
    * 基于时间点恢复时，源地域的ID。
    * >**RestoreType**=**1**时必传。
    * @example `cn-hangzhou`
    */ "SourceRegion"?: string;
    /**
    * 基于时间点恢复时，源实例的ID。
    * >**RestoreType**=**1**时必传。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "SourceDBInstanceName"?: string;
    "UserBakSetURL"?: string;
    "BakSetName"?: string;
    "HostType"?: string;
}
export { CheckCreateDdrDBInstanceRequest };