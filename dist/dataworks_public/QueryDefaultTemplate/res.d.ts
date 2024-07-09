export interface QueryDefaultTemplateResponse {
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `9990030003`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `参数错误`
     */
    ErrorMessage: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 返回的默认分类分级模板数据。JSON格式。
     * @example `[{"gmtModified":1709022365000,"fileName":"默认文件","isDelete":false,"isDefaultTemplate":true}]`
     */
    Data: any;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `102400001`
     */
    RequestId: string;
}
