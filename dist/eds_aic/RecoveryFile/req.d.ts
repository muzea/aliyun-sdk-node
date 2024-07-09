export interface RecoveryFileRequest {
    /**
     * 备份文件ID。
     * @example `bf-azhps4rdyi2th****`
     */
    "BackupFileId": string;
    /**
     * 实例ID列表。
     */
    "AndroidInstanceIdList": string[];
    /**
     * 备份类型。
     * @example `OSS`
     */
    "UploadType"?: string;
    /**
     * 备份地址的域名。
     * <notice>调用DescribeBuckets接口获取Bucket，如果云手机和bucket是同地域，获取IntranetEndpoint字段；如果是不同地域获取ExtranetEndpoint字段。></notice>
     * @example `oss-cn-hangzhou-internal.aliyuncs.com`
     */
    "UploadEndpoint"?: string;
    /**
     * 备份文件上传的OSS地址。
     * <notice>调用describeBuckets接口获取bucketName，选择ossObjectList获取key，拼接成“oss://${bucketName}/${key}”。</notice>
     * @example `oss://cloudphone-saved-bucket-cn-hangzhou-****​/aaa/acp-ig2bdpk374l12****_2024052014****.ab`
     */
    "BackupFilePath": string;
}
