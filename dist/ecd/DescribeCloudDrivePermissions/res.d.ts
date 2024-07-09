export interface DescribeCloudDrivePermissionsResponse {
    /**
     * 请求ID。
     * @example `A87DBB05-653A-5E4B-B72B-5F4A1E07E5B3`
     */
    RequestId: string;
    /**
     * 企业网盘权限信息列表。
     */
    CloudDrivePermissionModels: {
        /**
         * 用户在企业网盘与本地设备之间的文件传输权限。
         * @example `CDS_DOWNLOAD`
         */
        Permission: string;
        /**
         * 终端用户ID列表。
         */
        EndUsers: string[];
    }[];
}
