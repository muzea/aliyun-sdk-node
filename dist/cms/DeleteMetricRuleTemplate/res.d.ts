export interface DeleteMetricRuleTemplateResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `7B63F8CF-D48D-4608-A402-04FB5B2B4B6A`
     */
    RequestId: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 模板信息。
     */
    Resource: {
        /**
         * 模板ID。
         * @example `123****`
         */
        TemplateId: string;
    };
}
