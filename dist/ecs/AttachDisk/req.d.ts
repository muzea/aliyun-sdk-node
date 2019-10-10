interface AttachDiskRequest {
    "RegionId"?: string;
    /**
    * 待挂载的ECS实例ID。
    * @example `i-instance1`
    */ "InstanceId": string;
    /**
    * 待挂载的云盘ID。云盘（`DiskId`）和实例（`InstanceId`）必须在同一个可用区。
    * @example `d-23jbf2v5m`
    */ "DiskId": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 云盘设备名称。
    * > 该参数即将被弃用，为提高兼容性，建议您尽量使用其他参数。
    * @example `/dev/xvda`
    */ "Device"?: string;
    /**
    * 释放实例时，该云盘是否随实例一起释放。
    * 默认值：False。
    * @example `false`
    */ "DeleteWithInstance"?: boolean;
}
export { AttachDiskRequest };