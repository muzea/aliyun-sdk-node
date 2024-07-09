export interface GetMaliciousFileWhitelistConfigResponse {
    /**
     * 数据详情。
     */
    Data: {
        /**
         * 创建时间。
         * @example `1671607025000`
         */
        GmtCreate: string;
        /**
         * 修改时间。
         * @example `1674095396000`
         */
        GmtModified: string;
        /**
         * 告警名称：
         * - ALL：全部告警类型
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
         * >说明 targetType 为 SELECTION_KEY 的情况下，此字段有值
         * @example `0`
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
        Id: number;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 附加信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F8B6F758-BCD4-597A-8A2C-DA5A552C****`
     */
    RequestId: string;
    /**
     * HTTP请求返回的响应状态码，200表示请求发送成功。
     * @example `200`
     */
    HttpStatusCode: number;
}
