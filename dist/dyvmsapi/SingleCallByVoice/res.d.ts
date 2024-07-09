export interface SingleCallByVoiceResponse {
    /**
     * 请求状态码。
     * * 返回**OK**代表请求成功。
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
     * @example `E50FFA85-0B79-4421-A7BD-00B0A271966F`
     */
    RequestId: string;
    /**
     * 此次通话的唯一回执ID。
     * 可以使用CallId，调用[QueryCallDetailByCallId](~~393529~~)接口查询指定通话详情。
     * @example `116004767703^102806****`
     */
    CallId: string;
}
