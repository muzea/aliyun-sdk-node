export interface ApplyCompanyTemplateVersionToStoresResponse {
    /**
     * 请求ID。
     * @example `450E6CA4-5C5D-5DED-86C2-2B577C291764`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `MandatoryParameters`
     */
    ErrorCode: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 动态错误信息，用于替换返回参数ErrMessage错误信息中的%s。
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
    /**
     * 错误代码
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
}
