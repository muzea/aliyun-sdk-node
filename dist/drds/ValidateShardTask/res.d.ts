export interface ValidateShardTaskResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `0B6B7BDC-575D-4A77-A4F8-24B7EFAS45FG`
     */
    RequestId: string;
    /**
     * 检查结果列表。
     */
    List: {
        /**
         * 检查结果。取值：
         * * **0**：检查通过
         * * **1**：检查不通过
         * @example `0`
         */
        Result: number;
        /**
         * 检查项。
         * @example `same_schema`
         */
        Item: string;
    }[];
}
