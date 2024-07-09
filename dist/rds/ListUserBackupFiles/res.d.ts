export interface ListUserBackupFilesResponse {
    /**
     * 请求ID。
     * @example `AD67C22F-64F3-4448-A9A8-D1606D242879`
     */
    RequestId: string;
    /**
     * 用户备份文件详情列表。
     */
    Records: {
        /**
         * 用户备份文件状态。返回值：
         * * **Importing**：导入中。
         * * **Failed**：导入失败。
         * * **CheckSuccess**：校验通过。
         * * **BackupSuccess**：导入成功。
         * * **Deleted**：已删除。
         * @example `BackupSuccess`
         */
        Status: string;
        /**
         * 用户备份的导入开始时间，格式为Unix时间戳。单位：毫秒。
         * @example `1623231084000`
         */
        CreationTime: string;
        /**
         * 用户备份成功导入的时间，格式为Unix时间戳。单位：毫秒。
         * @example `1623231750000`
         */
        FinishTime: string;
        /**
         * 用户备份的备注信息。
         * @example `BackupTest`
         */
        Comment: string;
        /**
         * OSS中用户备份文件的路径。
         * @example `test/backup_qp.xb`
         */
        OssFilePath: string;
        /**
         * 用户备份文件所在的OSS Bucket名称。
         * @example `BackupTest`
         */
        OssBucket: string;
        /**
         * 用户备份的导入完成时间，格式为Unix时间戳。单位：毫秒。
         * @example `1623231750000`
         */
        ModificationTime: string;
        /**
         * OSS中用户备份文件的大小。单位：KB。
         * @example `79115`
         */
        OssFileSize: number;
        /**
         * OSS中用户备份文件的文件名。
         * @example `backup_qp.xb`
         */
        OssFileName: string;
        /**
         * 数据库版本。
         * @example `5.7`
         */
        EngineVersion: string;
        /**
         * 用户备份ID。
         * @example `b-kwwvr7v8t7of****`
         */
        BackupId: string;
        /**
         * 还原用户备份所需存储空间大小。单位：GB。
         * @example `20`
         */
        RestoreSize: string;
        /**
         * 用户备份所在的可用区ID。
         * @example `cn-hangzhou-b`
         */
        ZoneId: string;
        /**
         * 用户备份文件保留时长。单位：天。
         * @example `3`
         */
        Retention: number;
        /**
         * 数据库引擎。
         * @example `mysql`
         */
        Engine: string;
        /**
         * 用户备份文件的OSS下载地址。
         * @example `https://****.oss-ap-****.aliyuncs.com/backup_qp.xb`
         */
        OssUrl: string;
        /**
         * 用户备份文件元信息。更多信息，请参见[管理文件元信息](~~31859~~)。
         * @example `{\"Accept-Ranges\":\"bytes\",\"Connection\":\"keep-alive\",\"Content-Length\":81014337,\"Content-Type\":\"application/octet-stream\",\"Date\":1623309548000,\"ETag\":\"889FE9E5FCEBFE4781829488A352863B-1\",\"Last-Modified\":1622186844000,\"Server\":\"AliyunOSS\",\"x-oss-hash-crc64ecma\":\"5793608435727323129\",\"x-oss-object-type\":\"Multipart\",\"x-oss-request-id\":\"60C1BCEC92572F37318BD499\",\"x-oss-server-time\":\"166\",\"x-oss-storage-class\":\"Standard\"}`
         */
        OssFileMetaData: string;
        /**
         * 备份文件中的Binlog文件信息，备份过程中如有增量内容则会返回此参数。
         * @example `{\"binlogPosition\":\"154\",\"binlogFile\":\"0.000002\"}`
         */
        BinlogInfo: string;
        /**
         * 用户备份文件导入失败的原因。
         * @example `success`
         */
        Reason: string;
    }[];
}
