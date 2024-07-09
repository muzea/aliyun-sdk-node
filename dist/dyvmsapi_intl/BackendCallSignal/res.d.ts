export interface BackendCallSignalResponse {
    /**
     * 请求ID
     * @example `D9CB****-****-****-****-********9D23`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * 返回OK代表请求成功。
     * 其他错误码，请参见API错误码。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 此次通话的唯一回执ID。可以通过此ID查询单个通话的详情。
     * @example `550E****-****-****-****-********0CA0`
     */
    CallId: string;
}
