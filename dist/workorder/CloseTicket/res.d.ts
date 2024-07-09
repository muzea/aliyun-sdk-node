export interface CloseTicketResponse {
    /**
     * 接口请求结果返回码
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息, 当success=false的时候, 可以取到message
     * @example `success`
     */
    Message: string;
    /**
     * 请求唯一识别码。
     * @example `CA6204AC-6AA9-4CFA-9310-7DFD20C19EBC`
     */
    RequestId: string;
    /**
     * 调用接口返回是否成功,true代表调用正常
     * @example `true`
     */
    Success: boolean;
}
