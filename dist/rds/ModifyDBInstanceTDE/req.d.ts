interface ModifyDBInstanceTDERequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * TDE状态，取值：**Enabled | Disabled**
    * @example `Enabled`
    */ "TDEStatus": string;
    "OwnerId"?: number;
    /**
    * 想要开启TDE的数据库名称，可以一次输入多个，以英文逗号（,）分隔，最多传入50个。
    * >仅SQL Server企业版实例可以传入此参数。
    * @example `testDB`
    */ "DBName"?: string;
    /**
    * 自定义秘钥ID。
    * >仅MySQL实例可以传入此参数。
    * @example `749c1df7-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
    */ "EncryptionKey"?: string;
    /**
    * 角色的全局资源描述符，用来指定具体角色。详情请参见[RAM角色概览](~~93689~~)。
    * >仅MySQL实例可以传入此参数。
    * @example `acs:ram::1406926xxxxx:role/aliyunrdsinstanceencryptiondefaultrole`
    */ "RoleArn"?: string;
}
export { ModifyDBInstanceTDERequest };