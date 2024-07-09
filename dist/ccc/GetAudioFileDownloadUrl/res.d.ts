export interface GetAudioFileDownloadUrlResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 数据，音频资源文件的OSS下载链接，请注意，下载链接的有效期为24小时，请勿长期存储该链接。
     * @example `https://****.oss-cn-shanghai.aliyuncs.com/ccc-test/****.wav?Expires=1656472158&OSSAccessKeyId=****&Signature=****`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `943D8EF3-3321-471F-A104-51C96FCA94D6`
     */
    RequestId: string;
}
