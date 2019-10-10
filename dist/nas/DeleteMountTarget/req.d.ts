interface DeleteMountTargetRequest {
    "RegionId"?: string;
    /**
    * 挂载点域名
    * @example `174494b666-xog95.cn-hangzhou.nas.aliyuncs.com`
    */ "MountTargetDomain": string;
    /**
    * 文件系统 ID
    * @example `174494b666`
    */ "FileSystemId": string;
}
export { DeleteMountTargetRequest };