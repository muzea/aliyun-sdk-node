export interface CreateWhiteBoardResponse {
    /**
     * 请求ID。
     * @example `B29ADDF9-D089-460A-AF7D-BDE5DA112E4E`
     */
    RequestId: string;
    /**
     * 请求结果。
     * @example `true`
     */
    ResponseSuccess: boolean;
    /**
     * 错误码。
     * @example `null`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `null`
     */
    ErrorMsg: string;
    /**
     * 返回的结果信息。
     */
    Result: {
        /**
         * 文档的标识符，由大小写字母和数字组成。
         * @example `4EZlwmRW0gDG****`
         */
        DocKey: string;
    };
}
