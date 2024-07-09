export interface CheckFaceUserDoExistOnDeviceResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息
     * @example `success`
     */
    ErrorMessage: string;
    /**
     * 请求Id
     * @example `0A13279A-5640-45E7-87AA-83750541AD0E`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 检查返回信息
     */
    Data: {
        /**
         * 指定用户是否人脸同步成功
         * @example `true`
         */
        DoExist: boolean;
    };
}
