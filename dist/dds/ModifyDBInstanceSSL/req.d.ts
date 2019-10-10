interface ModifyDBInstanceSSLRequest {
    "RegionId"?: string;
    /**
    * 对SSL功能执行的操作，取值：
    * - **Open**：开启SSL加密。
    * - **Close**：关闭SSL加密。
    * - **Update**：更新SSL证书。
    *
    * @example `Open`
    */ "SSLAction": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
}
export { ModifyDBInstanceSSLRequest };