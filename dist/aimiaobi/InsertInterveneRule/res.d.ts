export interface InsertInterveneRuleResponse {
    /**
     * 请求唯一标识
     * @example `DD656AF9-0839-521A-A3D2-F320009F9C87`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `0`
     */
    Code: string;
    /**
     * 错误说明
     * @example `successful`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 规则id
         * @example `12345`
         */
        RuleId: number;
    };
}
