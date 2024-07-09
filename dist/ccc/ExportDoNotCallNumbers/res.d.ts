export interface ExportDoNotCallNumbersResponse {
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
     * 数据，导出结果的OSS下载链接，链接有效期24小时。
     * @example `https://****.oss-cn-shanghai.aliyuncs.com/ccc-test/blacklist.xlsx?Expires=3294624578&OSSAccessKeyId=****&Signature=****`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `BA03159C-E808-4FF1-B27E-A61B6E888D7F`
     */
    RequestId: string;
    Params: string[];
}
