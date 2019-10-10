interface ModifyDBInstanceTDERequest {
    "RegionId"?: string;
    /**
    * TDE状态，取值： **enabled**，即开启TDE功能。
    * > TDE功能开启后不支持关闭，请谨慎开启。
    * @example `enabled`
    */ "TDEStatus": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 加密方式，取值：**AES-256-CBC**。
    * > 当**TEDStatus**参数取值为**enabled**时，本参数才可用。
    * @example `AES-256-CBC`
    */ "EncryptorName"?: string;
}
export { ModifyDBInstanceTDERequest };