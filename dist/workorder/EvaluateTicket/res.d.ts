export interface EvaluateTicketResponse {
    /**
     * 状态码
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息, 当success=false的时候, 可以取到message
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C1DA4C6F-963E-5741-AB57-67A554D102FD`
     */
    RequestId: string;
    /**
     * 调用是否成功。true：表示成功；false：表示失败。
     * @example `true`
     */
    Success: boolean;
}
