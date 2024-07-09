export interface IvrCallResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[API错误码](https://help.aliyun.com/zh/vms/developer-reference/api-error-code?spm=a2c4g.11186623.0.0.321526dckd3diO)。
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
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
    /**
     * 此次通话的唯一回执ID。
     * CallId可以通过[QueryCallDetailByCallId](~~393529~~)接口查询指定通话的呼叫详情。
     * @example `116012354148^10281378****`
     */
    CallId: string;
}
