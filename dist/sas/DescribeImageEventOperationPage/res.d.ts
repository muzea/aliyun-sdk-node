export interface DescribeImageEventOperationPageResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 告警处置规则列表。
         */
        List: {
            /**
             * 告警处置规则主键。
             * @example `2646624`
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
        }[];
        /**
         * 分页查询参数。
         */
        PageInfo: {
            /**
             * 分页查询时，当前页的页码。
             * @example `1`
             */
            CurrentPage: number;
            /**
             * 分页查询时，显示的每页数据的最大条数。
             * @example `20`
             */
            PageSize: number;
            /**
             * 查询结果的总数。
             * @example `109`
             */
            TotalCount: number;
        };
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
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
     * @example `A3D7C47D-3F11-57BB-90E8-E5C20C61****`
     */
    RequestId: string;
}
