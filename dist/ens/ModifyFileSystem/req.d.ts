export interface ModifyFileSystemRequest {
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
     * 文件系统描述信息。
     * @example `fileSystemTest`
     */
    "Description": string;
}
