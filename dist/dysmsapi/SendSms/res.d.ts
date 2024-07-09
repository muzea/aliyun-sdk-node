export interface SendSmsResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[API错误码](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 发送回执ID。
     * 可根据发送回执ID在接口[QuerySendDetails](~~QuerySendDetails~~)中查询具体的发送状态。
     * @example `9006197469364984****`
     */
    BizId: string;
    /**
     * 请求ID。
     * @example `F655A8D5-B967-440B-8683-DAD6FF8DE990`
     */
    RequestId: string;
}
