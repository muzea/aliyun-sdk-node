export interface DeleteNASFileSystemsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * NAS文件系统ID数组。
     * @example `04f314****`
     */
    "FileSystemId": string[];
}
