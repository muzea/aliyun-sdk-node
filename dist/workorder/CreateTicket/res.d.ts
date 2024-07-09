export interface CreateTicketResponse {
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
     * 返回值, 即工单号
     * @example `0005PYGCW`
     */
    Data: string;
    /**
     * 接口请求的唯一ID, 每次调用requestID唯一
     * @example `0254B7DE-7365-57B4-8E38-14FE927E3FEB`
     */
    RequestId: string;
    /**
     * 调用接口返回是否成功, true代表调用正常
     * @example `True`
     */
    Success: boolean;
}
