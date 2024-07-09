export interface GetImageEventOperationResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 告警处置规则主键。
         * @example `443496`
         */
        Id: number;
        /**
         * 告警类型。取值：
         * - **sensitiveFile**：敏感文件。
         * @example `sensitiveFile`
         */
        EventType: string;
        /**
         * 操作码。取值：
         * - **whitelist**：白名单。
         * @example `whitelist`
         */
        OperationCode: string;
        /**
         * 规则条件。JSON格式，key取值：
         * - **condition**：匹配条件。
         * - **type**：匹配类型。
         * - **value**：匹配值。
         * @example `[{\"condition\": \"MD5\", \"type\": \"equals\", \"value\": \"0083a31cc0083a31ccf7c10367a6e783e\"}]
        `
         */
        Conditions: string;
        /**
         * 规则范围。JSON格式，key取值：
         * - **type**：范围类型。
         * - **value**：范围值。
         * @example `{\"type\": \"repo\", \"value\": \"test-aaa/shenzhen-repo-01\"}
        `
         */
        Scenarios: string;
        /**
         * 告警项关键字。
         * @example `PEM`
         */
        EventKey: string;
        /**
         * 告警项名称。
         * @example `PEM`
         */
        EventName: string;
    };
    /**
     * 返回的查询结果的状态。取值：
     * - **true**：成功。
     * - **false**：失败。
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
     * 唯一请求ID。
     * @example `5861EE3E-F0B3-48B8-A5DC-A5080BFB****`
     */
    RequestId: string;
}
