interface ModifyTagWithUuidRequest {
    "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * 指定待修改机器列表。
    * @example `111-xx,aa-bb`
    */ "UuidList"?: string;
    /**
    * 指定待修改标签列表。
    * @example `ac,ad`
    */ "TagList"?: string;
    /**
    * 指定待修改标签ID。
    * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
    */ "TagId"?: string;
    /**
    * 指定待修改的资产类型。
    * @example `ecs`
    */ "MachineTypes"?: string;
}
export { ModifyTagWithUuidRequest };