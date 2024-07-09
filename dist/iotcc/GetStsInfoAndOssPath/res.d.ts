export interface GetStsInfoAndOssPathResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * STS超期时间的时间戳。
     * @example `1633060876`
     */
    Expiration: string;
    /**
     * STS临时AccessKey ID。
     * @example `<yourAccessKeyId>`
     */
    AccessKeyId: string;
    /**
     * STS临时AccessKey Secret。
     * @example `<yourAccessKeySecret>`
     */
    AccessKeySecret: string;
    /**
     * STS安全令牌。
     * @example `<yourSecurityToken>`
     */
    SecurityToken: string;
    /**
     * 模板文件提交临时地址。
     * 格式为`<BucketName>/<uid>/<FileName>`。
     * 根据上传的文件名及用户信息，系统会返回临时STS信息和IP绑定关系CSV文件提交地址，该地址需要调用[PutObject](~~31978~~)接口上传文件。
     * @example `cciot-cn-hangzhou/127859184306****​/test.csv`
     */
    OssPath: string;
}
