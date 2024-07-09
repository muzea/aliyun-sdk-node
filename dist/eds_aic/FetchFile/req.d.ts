export interface FetchFileRequest {
    /**
     * 实例列表。
     */
    "AndroidInstanceIdList": string[];
    /**
     * 从指定的云手机文件路径拉取文件。
     * @example `/data/a.txt`
     */
    "SourceFilePath": string;
    /**
     * 保存拉取文件的存储类型。
     * @example `OSS`
     */
    "UploadType": string;
    /**
     * 保存拉取文件的服务域名。
     * @example `oss-cn-hangzhou.aliyuncs.com`
     */
    "UploadEndpoint": string;
    /**
     * 保存拉取文件的云端地址。
     * @example `oss://cloudphone-saved-bucket-cn-hangzhou-165955035250****​/backup/`
     */
    "UploadUrl": string;
}
