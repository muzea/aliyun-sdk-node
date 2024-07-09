export interface AddRuleCategoryResponse {
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
     * @example `D10B9203-1A6A-49DA-AE56-4D160DD37DBC`
     */
    RequestId: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果
     */
    Data: {
        /**
         * 是否选择新增的规则类型
         * @example `false`
         */
        Select: boolean;
        Type: number;
    };
}
