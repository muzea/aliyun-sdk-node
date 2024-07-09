export interface DeleteMountTargetRequest {
    /**
     * 文件系统ID。
     * @example `c50f8*****`
     */
    "FileSystemId": string;
    /**
     * 节点ID。
     * @example `cn-beijing-cmcc`
     */
    "EnsRegionId": string;
    /**
     * 挂载点名称。
     * @example `TestMountPath`
     */
    "MountTargetName": string;
}
