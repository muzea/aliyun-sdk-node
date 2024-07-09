export interface DescribeSpaceClientConfigResponse {
    /**
     * 客户端密钥。
     * @example `0a4gJT0faV*****D4lgQmw==`
     */
    ApiKey: string;
    /**
     * 服务空间ID。
     * @example `226e5213-697c-4a52-b4ff-35a09f8*****`
     */
    SpaceId: string;
    /**
     * 唯一请求ID。
     * @example `EA770971-A4A0-4555-9E00-C94A2194E150`
     */
    RequestId: string;
    /**
     * 服务端私钥，仅当Detail为True时才返回该信息。
     * @example `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhki******G9w0BAQE7V0sQaj\n-----END PRIVATE KEY-----`
     */
    PrivateKey: string;
    /**
     * 服务网关Endpoint。
     * @example `226e5213-697c-4a52-b4ff-35a09f8*****`
     */
    Endpoint: string;
    /**
     * 文件上传Endpoint。
     * @example `cocdsfmb-12266946259*****-file.oss-cn-zhangjiakou.aliyuncs.com`
     */
    FileUploadEndpoint: string;
    /**
     * 服务空间名称。
     * @example `myspace`
     */
    Name: string;
}
