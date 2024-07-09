export interface CreateMountTargetRequest {
    /**
     * 文件系统ID。
     * @example `c50f8*****`
     */
    "FileSystemId": string;
    /**
     * 地域ID。
     * @example `cn-beijing-cmcc`
     */
    "EnsRegionId": string;
    /**
     * 网络ID。
     * @example `n-*****`
     */
    "NetWorkId": string;
    /**
     * 挂载点名称。
     * @example `TestMountPath`
     */
    "MountTargetName": string;
}
