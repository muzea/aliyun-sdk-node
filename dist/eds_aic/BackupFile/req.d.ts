export interface BackupFileRequest {
    /**
     * 实例ID列表。
     */
    "AndroidInstanceIdList": string[];
    /**
     * 备份文件描述。
     * @example `这是一个备份/data的请求。`
     */
    "Description"?: string;
    /**
     * 备份的文件路径列表。
     */
    "SourceFilePathList": string[];
    /**
     * 备份类型。
     * @example `OSS`
     */
    "UploadType"?: string;
    /**
     * 备份地址的域名。
     * <notice>如果上传到OSS桶，调用describeBuckets接口获取Bucket，如果云手机和bucket是同地域，获取intranetEndpoint字段；如果是不同地域获取extranetEndpoint字段。></notice>
     * @example `oss-cn-shanghai-internal.aliyuncs.com`
     */
    "UploadEndpoint"?: string;
    /**
     * 备份文件的上传地址。
     * <notice>如果上传到OSS桶，调用describeBuckets接口获取bucketName，选择ossObjectList获取key，拼接成“oss://${bucketName}/${key}”></notice>
     * @example `oss://cloudphone-saved-bucket-****​/mabo/aic-i3b83gk0rw6p24jx3_2024051409****.ab`
     */
    "BackupFilePath": string;
}
