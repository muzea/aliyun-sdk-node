export interface ExportCustomCallTaggingResponse {
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
     * 数据，导出结果所在的OSS的下载链接，链接有效期为24小时。
     * @example `http://ccc-v2-online.oss-cn-shanghai.aliyuncs.com/ccc-test/tagging.xlsx ?Expires=1610910578&amp;OSSAccessKeyId=****&amp;Signature=****`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `BA03159C-E808-4FF1-B27E-A61B6E888D7F
    `
     */
    RequestId: string;
}
