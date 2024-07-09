export interface ReplyTicketResponse {
    /**
     * 状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息, 当success=false的时候, 可以取到message
     * @example `非法的入参`
     */
    Message: string;
    /**
     * 返回值, 即工单回复内容的dialogID
     * @example `46434030`
     */
    Data: string;
    /**
     * 接口请求的唯一id,每次调用requestid唯一
     * @example `C1DA4C6F-963E-5741-AB57-67A554D102FD`
     */
    RequestId: string;
    /**
     * 调用接口返回是否成功,true代表调用正常
     * @example `true`
     */
    Success: boolean;
}
