export interface GetFusionAuthTokenResponse {
    /**
     * 状态码的描述。
     * @example `成功`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47`
     */
    RequestId: string;
    /**
     * 返回的鉴权code字符串
     * @example `FKcksloqk***********jalEc+`
     */
    Model: string;
    /**
     * 请求状态码。返回OK代表请求成功。其他错误码，请参见错误码列表。
     * @example `OK`
     */
    Code: string;
    /**
     * 调用API是否成功。取值说明如下：true：成功。false：失败。
     * @example `false`
     */
    Success: boolean;
}
