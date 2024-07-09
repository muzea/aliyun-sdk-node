export interface CreateMaliciousFileWhitelistConfigResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 创建时间。
         * @example `1671607025000`
         */
        GmtCreate: string;
        /**
         * 修改时间。
         * @example `1671607025000`
         */
        GmtModified: string;
        /**
         * 告警名称：
         * - ALL： 全部告警类型
         * @example `ALL`
         */
        EventName: string;
        /**
         * 加白的字段。
         * @example `fileMd5`
         */
        Field: string;
        /**
         * 加白的字段值。
         * @example `b2cf9747ee49d8d9b105cf16e078cc16`
         */
        FieldValue: string;
        /**
         * 规则判定操作符：
         * - strEqual：字符串相等
         * @example `strEqual`
         */
        Operator: string;
        /**
         * 目标生效范围：
         * - ALL：全部资产
         * - 其他：资产选择组件选中的资产范围Key
         * @example `ALL`
         */
        TargetValue: string;
        /**
         * 生效目标类型：
         * - ALL：全部资产
         * - SELECTION_KEY：通过资产选择组件选中的资产
         * @example `ALL`
         */
        TargetType: string;
        /**
         * 生效的资产数量。
         * > targetType 为 SELECTION_KEY 的情况下，此字段有值
         * @example `1`
         */
        Count: string;
        /**
         * 业务来源：
         * - agentless：无代理检测
         * @example `agentless`
         */
        Source: string;
        /**
         * 规则ID。
         * @example `1`
         */
        Id: string;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回结果的提示信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A4EB8B1C-1DEC-5E18-BCD0-XXXXXXXXX`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
