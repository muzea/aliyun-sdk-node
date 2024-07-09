export interface UpdateEslDeviceLightResponse {
    /**
     * POP请求ID。
     * @example `E69C8998-1787-4999-8C75-D663FF1173CF`
     */
    RequestId: string;
    /**
     * 错误消息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * POP请求成功与否标识。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `MandatoryParameters`
     */
    ErrorCode: string;
    /**
     * 失败数量。
     * @example `0`
     */
    FailCount: number;
    /**
     * 内部错误码。
     * @example `-1001`
     */
    Code: string;
    /**
     * 消息。
     * @example `success`
     */
    Message: string;
    /**
     * 动态消息。
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
    /**
     * 成功数量。
     * @example `1`
     */
    SuccessCount: number;
    /**
     * 动态错误码。
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
    /**
     * 失败价签信息列表。
     */
    LightFailEslInfos: {
        /**
         * 价签条码
         * @example `18bc5a63****`
         */
        EslBarCode: string;
        /**
         * 错误消息。
         * @example `The specified ESL device does not exist.`
         */
        ErrorMessage: string;
    }[];
}
