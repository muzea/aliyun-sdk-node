export interface SyncAddMaterialResponse {
    /**
     * 返回结果
     */
    Result: {
        /**
         * 是否成功
         * @example `true`
         */
        Success: boolean;
        /**
         * 基本信息
         * @example `success`
         */
        Message: string;
        /**
         * POP动态补充信息
         * @example `The specified store %s does not exist.`
         */
        DynamicMessage: string;
        /**
         * POP动态补充信息
         */
        DynamicCode: string;
        /**
         * 错误类型 参考 ErrorCodes枚举
         * @example `MandatoryParameters`
         */
        ErrorCode: string;
    };
    /**
     * 请求ID
     * @example `450E6CA4-5C5D-5DED-86C2-2B577C291764
    `
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的出错信息。
     * @example `success`
     */
    Message: string;
    /**
     * 错误码
     * @example `MandatoryParameters`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 动态码
     * @example `PlatformResponseError.%s
    `
     */
    DynamicCode: string;
    /**
     * 动态错误信息，用于替换返回参数ErrMessage错误信息中的%s。
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
}
