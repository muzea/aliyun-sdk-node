export interface CreateTempFileUploadUrlResponse {
    /**
     * 上传文件到OSS使用的OSS接入点地址。
     * @example `oss-cn-shenzhen.aliyuncs.com`
     */
    Endpoint: string;
    /**
     * 请求ID。
     * @example `F4EEB401-DD21-588D-AE3B-1E835C7655E1`
     */
    RequestId: string;
    /**
     * 上传文件到OSS使用的签名的过期时间。UNIX时间，单位为秒。
     * @example `1654326678`
     */
    ExpireTime: number;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 上传文件到OSS使用的key。
     * @example `temp/1440155109798732/upload/2022-07-29/49bed34c-b430-4e7e-89b1-4be2b734f95c/iaclone.diff`
     */
    TempFileKey: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 上传文件到OSS使用的Bucket名称。
     * @example `hbr-temp-bucket`
     */
    BucketName: string;
    /**
     * 上传文件到OSS使用的AccessKeyID
     * @example `LTAI****Up`
     */
    OssAccessKeyId: string;
    /**
     * 上传文件到OSS使用的策略。
     * @example `eyJleH****V19`
     */
    Policy: string;
    /**
     * 上传文件到OSS使用的签名。
     * @example `RmhI****0A=`
     */
    Signature: string;
}
