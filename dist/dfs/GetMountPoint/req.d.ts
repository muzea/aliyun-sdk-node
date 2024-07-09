export interface GetMountPointRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 文件系统ID。
     * @example `37af8f42-2abc-4e74-889d-664f5163****`
     */
    "FileSystemId": string;
    /**
     * 挂载点ID。
     * @example `f-37af8f42f****.cn-hangzhou.dfs.aliyuncs.com`
     */
    "MountPointId": string;
}
