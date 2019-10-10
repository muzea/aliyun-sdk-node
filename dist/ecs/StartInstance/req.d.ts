interface StartInstanceRequest {
    "RegionId"?: string;
    /**
    * 指定启动的实例ID。
    * @example `i-instanceid1`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 适用于[实例规格族](~~25378~~)d1、i1或者i2等包含本地盘的实例。当d1、i1或者i2的本地盘出现故障时，可通过此参数指定启动实例时，是否将实例恢复到最初的健康状态。取值范围：
    * -   true：将实例恢复到最初的健康状态，实例原有本地磁盘中的数据将会丢失。
    * -   false（默认）：不做任何处理，维持现状。
    * @example `false`
    */ "InitLocalDisk"?: boolean;
    "DryRun"?: boolean;
}
export { StartInstanceRequest };