export interface DebugServiceResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `46621149`
     */
    RequestId: string;
    /**
     * 结果信息。
     * @example `{"requestId": "0CF29CA9", "data": {"category": "\u732b", "score": 0.7035083174705505}, "errorcode": "0", "errormessage": "success"}`
     */
    Data: string;
}
