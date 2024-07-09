export interface DescribeBackupFilesResponse {
    /**
     * 返回结果对象列表。
     */
    Data: {
        /**
         * 创建时间。
         * @example `2024-05-15 17:33:59`
         */
        GmtCreated: string;
        /**
         * 更新时间
         * @example `2024-05-15 17:33:59`
         */
        GmtModified: string;
        /**
         * 备份文件ID。
         * @example `bf-b0qbg3pbpjkn7****`
         */
        BackupFileId: string;
        /**
         * 备份文件名称。
         * @example `a-58ftsoo90p0qa****.ab`
         */
        BackupFileName: string;
        /**
         * 实例ID。
         * @example `ag-58ftsoo90p0qi****`
         */
        InstanceGroupId: string;
        /**
         * 实例ID。
         * @example `acp-34pqe4r0kd9kn****`
         */
        AndroidInstanceId: string;
        /**
         * 实例名称。
         * @example `测试云手机`
         */
        AndroidInstanceName: string;
        /**
         * 备份文件的Owner。
         * @example `test`
         */
        EndUserId: string;
        /**
         * 备份文件状态。
         * @example `AVAILABLE`
         */
        Status: string;
        /**
         * 源备份文件的目录列表。
         */
        SourceFilePathList: string[];
        /**
         * 源备份文件总大小。
         * @example `10227168`
         */
        FileSize: number;
        /**
         * 备份类型。
         * @example `OSS`
         */
        UploadType: string;
        /**
         * 上传地址的域名。
         * @example `oss-cn-hangzhou.aliyuncs.com`
         */
        UploadEndpoint: string;
        /**
         * 备份文件保存的目录。
         * @example `oss://cloudphone-saved-bucket-cn-shanghai/backup/aic-58ftsoo90p0qa****.ab`
         */
        BackupFilePath: string;
        /**
         * 备份文件的描述信息。
         * @example `这是备份/data/media目录的备份文件。`
         */
        Description: string;
    }[];
    /**
     * 请求唯一ID，如果遇到问题请提供这个请求ID，由工作人员为您排查。
     * @example `425F351C-3F8E-5218-A520-B6311D0D****`
     */
    RequestId: string;
    /**
     * 用来表示当前调用返回读取到的位置。空代表数据已经读取完毕。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****`
     */
    NextToken: string;
    /**
     * 本次读取的最大数据量。
     * @example `10`
     */
    MaxResults: string;
    /**
     * 总条目数。
     * @example `91`
     */
    TotalCount: number;
}
