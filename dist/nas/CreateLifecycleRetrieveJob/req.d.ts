export interface CreateLifecycleRetrieveJobRequest {
    /**
     * 文件系统ID。
     * @example `31a8e4****`
     */
    "FileSystemId": string;
    /**
     * 指定取回的目录或文件路径列表。最多10个路径。
     * @example `Paths.1=/pathway/doc1,Paths.2=/pathway/doc2`
     */
    "Paths": string[];
    /**
     * 分级存储类型。
     * - InfrequentAccess（默认值）：低频存储。
     * - Archive：归档存储。
     * @example `InfrequentAccess`
     */
    "StorageType"?: string;
}
