export interface TestEventPatternResponse {
    /**
     * 请求ID
     * @example `96D7C0AB-DCE5-5E82-96B8-4725E1706BB1`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `无`
     */
    Message: string;
    /**
     * 接口返回码：Success：表示成功。                                 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * true表示事件模式与提供的 JSON 格式事件匹配。false 表示不匹配。
         * @example `true`
         */
        Result: boolean;
    };
}
