interface ModifyInstanceCrossBackupPolicyRequest {
    /**
    * 源实例地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 跨地域备份保存类型。默认值：**1**，表示每个备份都保存。
    * @example `1`
    */ "CrossBackupType"?: string;
    /**
    * 跨地域日志备份开关，取值：
    * * **0**：关闭；
    * * **1**：开启。
    * @example `1`
    */ "LogBackupEnabled"?: string;
    /**
    * 跨地域备份总开关（数据备份+日志备份），取值：
    * * **0**：关闭；
    * * **1**：开启。
    * @example `1`
    */ "BackupEnabled"?: string;
    /**
    * 跨地域备份的目的地域ID。
    * @example `cn-shanghai`
    */ "CrossBackupRegion"?: string;
    "StorageOwner"?: string;
    "StorageType"?: string;
    "Endpoint"?: string;
    /**
    * 跨地域备份保留方式。默认值：**1**，表示按时长保留。
    * @example `1`
    */ "RetentType"?: number;
    /**
    * 跨地域备份保留天数，取值：**7~1825**。
    * @example `7`
    */ "Retention"?: number;
    "RelService"?: string;
}
export { ModifyInstanceCrossBackupPolicyRequest };