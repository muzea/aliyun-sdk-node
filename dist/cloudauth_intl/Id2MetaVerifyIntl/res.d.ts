export interface Id2MetaVerifyIntlResponse {
    /**
     * 请求Id
     * @example `EFA11401-C961-5E89-A2D3-BF9883E5CC3D`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `Success`
     */
    Code: string;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回结果
     */
    Result: {
        /**
         * 核验结果码。
         * - 1：核验一致
         * - 2：核验不一致
         * - 3：未查得
         * @example `1`
         */
        BizCode: string;
    };
}
