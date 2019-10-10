interface ModifyMountTargetRequest {
    "RegionId"?: string;
    /**
    * 挂载点域名
    * @example `1ca404a666-wxa89.cn-hangzhou.nas.aliyuncs.com`
    */ "MountTargetDomain": string;
    /**
    * 文件系统 ID
    * @example `1ca404a666`
    */ "FileSystemId": string;
    /**
    * 权限组名称
    * @example `classic-test`
    */ "AccessGroupName"?: string;
    /**
    * 挂载点状态，枚举值包括：Active（表示启用），Inactive（表示禁用）
    * @example `Inactive`
    */ "Status"?: string;
}
export { ModifyMountTargetRequest };