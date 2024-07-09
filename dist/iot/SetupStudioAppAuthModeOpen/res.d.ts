export interface SetupStudioAppAuthModeOpenResponse {
    /**
     * 调用失败时，返回的错误码。错误码详情，请参见[错误码](~~202245~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 应用数据。
     */
    Data: {
        /**
         * 鉴权模式。
         * @example `1`
         */
        AuthMode: number;
        /**
         * Token信息。
         */
        TokenInfo: {
            /**
             * Token类型。
             * @example `custom`
             */
            Type: string;
            /**
             * 是否启用Token。
             * - **YES**：是。
             * - **NO**：否。
             * @example `YES`
             */
            IsEnable: string;
            /**
             * 应用ID。
             * @example `a12********`
             */
            BizId: string;
            /**
             * Token值。
             * @example `25bf576a6c6f**********`
             */
            Token: string;
            /**
             * 应用类型。
             * @example `webApp`
             */
            BizType: string;
        };
    };
}
