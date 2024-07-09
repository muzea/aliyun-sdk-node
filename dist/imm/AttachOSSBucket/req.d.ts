export interface AttachOSSBucketRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 和当前项目处于同一地域(Region)的OSS Bucket名称。
     * @example `examplebucket`
     */
    "OSSBucket": string;
    /**
     * 绑定的描述信息。长度为1~128个字符，默认值为空。
     * @example `test-attachment`
     */
    "Description"?: string;
}
