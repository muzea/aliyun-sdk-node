export interface AddFaceUserResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~288314~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `0A13279A-5640-45E7-87AA-83750541AD0E`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `face user already exist`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 自定义的用户参数。
         * @example `{"key1":"value1", "key2":"value2"}`
         */
        Params: string;
        /**
         * 用户身份识别ID。
         * @example `1234567890`
         */
        CustomUserId: string;
        /**
         * 用户名。
         * @example `Tony`
         */
        Name: string;
        /**
         * 系统为本次添加的用户生成的ID。
         * > 在人脸底库服务的其它接口调用中，会使用**UserId**，请妥善保存。
         * @example `3mtjaqebeq4d****`
         */
        UserId: string;
    };
}
