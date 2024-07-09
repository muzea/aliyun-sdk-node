export interface SmartCallResponse {
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
     * 请求ID。
     * @example `A90E4451-FED7-49D2-87C8-00700A8C4D0D`
     */
    RequestId: string;
    /**
     * 此次通话的唯一回执ID。
     * CallId可以通过[QueryCallDetailByCallId](~~QueryCallDetailByCallId~~)接口查询呼叫详情。
     * @example `116012854210^10281427****`
     */
    CallId: string;
}
