export interface SetSensitiveDefineRuleConfigResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 自定义配置主键。
         * @example `44616`
         */
        Id: number;
    };
    /**
     * 请求是否成功。取值：
     * - **true**：是
     * - **false**：否
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口请求返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 接口请求返回的信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID。
     * @example `0B48AB3C-84FC-424D-A01D-B9270EF4****`
     */
    RequestId: string;
}
