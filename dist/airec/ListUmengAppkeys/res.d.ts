export interface ListUmengAppkeysResponse {
    /**
     * 查询结果
     */
    result: {
        /**
         * appkey
         * @example `5ddcf39f57729e708b00000e`
         */
        appkey: string;
        /**
         * Android/ios
         * @example `ios`
         */
        platform: string;
        /**
         * app名称
         * @example `xxx`
         */
        name: string;
    }[];
    /**
     * 错误码
     * @example `200`
     */
    code: string;
    /**
     * 请求的RequestID
     * @example `829F38F6-E2D6-4109-90A6-888160BD16C2`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `success`
     */
    message: string;
}
