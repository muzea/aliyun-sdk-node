export interface AddCompanyTemplateResponse {
    /**
     * 请求ID。
     * @example `C033DCCE-FA85-5AD8-9A7C-C3F41220B898`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * 请求成功与否标识。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `InvalidResourceType.NotSupported`
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
     * 错误消息
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
    /**
     * 动态错误码。
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
}
