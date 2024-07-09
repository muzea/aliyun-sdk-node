export interface SendFileRequest {
    /**
     * 实例列表。
     */
    "AndroidInstanceIdList": string[];
    /**
     * 将文件上传到云手机内部的上传路径。
     * @example `/data`
     */
    "SourceFilePath": string;
    /**
     * 上传文件所在的存储类型。
     * @example `OSS`
     */
    "UploadType": string;
    /**
     * 上传文件所在服务域名。
     * @example `oss-cn-hangzhou.aliyuncs.com`
     */
    "UploadEndpoint": string;
    /**
     * 上传文件所在的云端地址。
     * @example `oss://cloudphone-saved-bucket-cn-hangzhou-165955035250****​/backup/a.txt`
     */
    "UploadUrl": string;
}
