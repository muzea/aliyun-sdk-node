export interface DescribeFileSystemsRequest {
    /**
     * 节点ID。
     * @example `cn-beijing-cmcc`
     */
    "EnsRegionId"?: string;
    /**
     * NAS文件系统ID。
     * @example `c50f8*****`
     */
    "FileSystemId"?: string;
    /**
     * NAS文件系统名称。
     * @example `FileSystem1`
     */
    "FileSystemName"?: string;
    /**
     * 页码，起始值为**1**。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页行数，最大值为**100**行。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
