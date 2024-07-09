export interface DelRuleCategoryResponse {
    /**
     * 响应码
     * @example `200`
     */
    Code: string;
    /**
     * 响应信息
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID
     * @example `xxx`
     */
    RequestId: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的结果
     */
    Data: {
        /**
         * 是否选择新的规则类型
         * @example `false`
         */
        Select: boolean;
    };
}
