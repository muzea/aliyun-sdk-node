export interface QueryCallDetailByCallIdResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 返回的呼叫详情。JSON格式。以下字段仅供参考，以具体返回详情为准。
     * - **caller**：主叫号码。
     * - **startDate**：通话开始时间。
     * - **stateDesc**：通话状态描述。
     * - **duration**：通话时长。单位：秒。**0**：用户未接通。
     * - **callerShowNumber**：被叫显号。
     * - **gmtCreate**：通话请求的接收时间。
     * - **state**：通话状态。通话状态是运营商实时返回的，更多状态信息，请参见[运营商回执错误码](~~55085~~)。
     * - **endDate**：通话结束时间。
     * - **calleeShowNumber**：被叫显号。
     * - **callee**：被叫号码。
     * - **aRingTime**：a路响铃开始时间。格式：yyyy-MM-dd HH:mm:ss。
     * - **aEndTime**：a路响铃结束时间。格式：yyyy-MM-dd HH:mm:ss。
     * - **bRingTime**：b路响铃开始时间。格式：yyyy-MM-dd HH:mm:ss。
     * - **bEndTime**：b路响铃结束时间。格式：yyyy-MM-dd HH:mm:ss。
     * @example `{"caller":"18767****","startDate":"","stateDesc":"502","duration":0,"callerShowNumber":"05344****","gmtCreate":"2017-11-27 20:09:06","state":"502","endDate":"","calleeShowNumber":"053447****","bRingTime":"2022-01-01 12:02:00"，"bEndTime":"2022-01-01 12:02:28"，"callee":"1373546****"}`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `A90E4451-FED7-49D2-87C8-00700A8C4D0D`
     */
    RequestId: string;
}
