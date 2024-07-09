export interface DeleteApiDestinationResponse {
    /**
     * 请求ID
     * @example `382E6272-8E9C-5681-AC96-A8AF0BFAC1A5`
     */
    RequestId: string;
    /**
     * 附加信息。取值说明如下：请求正常，返回success。                                 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 接口状态或POP错误码。取值说明如下：Success：成功。
     * @example `Success`
     */
    Code: string;
}
