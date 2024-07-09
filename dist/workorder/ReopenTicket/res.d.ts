export interface ReopenTicketResponse {
    /**
     * 接口请求结果返回码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息, 当success=false的时候, 可以取到message
     * @example `success`
     */
    Message: string;
    /**
     * 调用成功后返回的业务数据。
     * @example `0005PYGCW`
     */
    Data: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `C1DA4C6F-963E-5741-AB57-67A554D102FD`
     */
    RequestId: string;
    /**
     * 调用接口返回是否成功, true代表调用正常
     * @example `true`
     */
    Success: boolean;
}
