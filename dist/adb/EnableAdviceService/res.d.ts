export interface EnableAdviceServiceResponse {
    /**
     * 调用结果的信息。取值说明：
     * - 请求正常，返回**Success**。
     * - 请求异常，返回具体异常信息。
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `E1745C03-7CCE-55CF-932E-08121AAFA6AF`
     */
    RequestId: string;
}
