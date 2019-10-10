interface ResetFileSystemRequest {
    "RegionId": string;
    /**
    * 指定的文件系统 ID。
    * @example `extreme-012ddfsdf`
    */ "FileSystemId": string;
    "SnapshotId": string;
}
export { ResetFileSystemRequest };