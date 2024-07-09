export interface CreateDownloadUrlResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 文件url
     * @example `http://ssml-test.oss-cn-shanghai.aliyuncs.com/key`
     */
    FileHttpUrl: string;
    /**
     * 请求id
     * @example `7401D698-0AAC-5909-B68E-88C68805FFB8`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 信息。
     * @example `get upload tool url success`
     */
    Message: string;
}
