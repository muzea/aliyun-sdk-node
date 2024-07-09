export interface DeleteCompanyTemplateResponse {
    /**
     * 请求ID。
     * @example `A7571D49-9B36-5782-AD3D-32C8436D45B7`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * POP请求成功与否标识。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。取值说明如下：请求成功：不返回ErrorCode字段。                                 请求失败：返回ErrorCode字段。具体信息，请参见本文的错误码列表。
     * @example `MandatoryParameters`
     */
    ErrorCode: string;
    /**
     * HTTP状态码。
     * @example `-1001`
     */
    Code: string;
    /**
     * 错误代码。
     * @example `success`
     */
    Message: string;
    /**
     * 动态错误信息，用于替换返回参数ErrMessage错误信息中的%s。
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
    /**
     * 动态错误码。
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
}
