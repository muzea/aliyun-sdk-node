export interface DescribeMountTargetsRequest {
    /**
     * 地域ID。
     * @example `cn-beijing-cmcc`
     */
    "EnsRegionId": string;
    /**
     * 文件系统ID。
     * @example `c50f8*****`
     */
    "FileSystemId": string;
    /**
     * 挂载点名称。
     * @example `TestMountPath`
     */
    "MountTargetName"?: string;
    /**
     * 页码，起始值为1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页行数，最大值为100行。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
