interface DeleteInstanceRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `i-instance1`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 是否强制释放**运行中**（`Running`的实例。
    * -   true：强制释放**运行中**（`Running`）的实例。强制释放相当于断电，实例内存以及存储中的临时数据都会被擦除，无法恢复。
    * -   false（默认值）：正常释放实例，此时实例必须处于**已停止**（`Stopped`）状态。
    * @example `false`
    */ "Force"?: boolean;
    /**
    * 是否释放已到期的包年包月实例。
    * 默认值：false。
    * @example `false`
    */ "TerminateSubscription"?: boolean;
}
export { DeleteInstanceRequest };