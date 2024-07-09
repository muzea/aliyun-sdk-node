export interface ModifyNASDefaultMountTargetRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * NAS文件系统ID。
     * @example `04f314****`
     */
    "FileSystemId": string;
    /**
     * 挂载点域名。
     * @example `0bf744****-xo***.cn-hangzhou.nas.aliyuncs.com`
     */
    "MountTargetDomain": string;
}
