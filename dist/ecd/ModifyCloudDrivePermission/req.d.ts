export interface ModifyCloudDrivePermissionRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 已创建的企业网盘ID。
     * @example `cn-hangzhou+cds-60911*****`
     */
    "CdsId": string;
    /**
     * 仅具备下载权限的终端用户ID列表。这些用户仅可从企业网盘下载文件至本地设备，不可从本地设备上传文件至企业网盘。
     */
    "DownloadEndUserIds"?: string[];
    /**
     * 具备上传和下载权限的终端用户ID列表。这些用户既可以从企业网盘下载文件至本地设备，也可以从本地设备上传文件至企业网盘。
     */
    "DownloadUploadEndUserIds"?: string[];
}
