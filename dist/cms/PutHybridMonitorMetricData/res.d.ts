export interface PutHybridMonitorMetricDataResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 请求ID。
     * @example `5DB1CBCA-D14A-55FA-814F-B4DBD9735F68`
     */
    RequestId: string;
    /**
     * 错误参数的详情。
     * 如果您设置的请求参数不符合要求，则会显示错误参数的详情。
     */
    ErrorDetail: {
        /**
         * 错误信息在数组中的位置。
         * @example `0`
         */
        Index: number;
        /**
         * 错误参数的提示信息。
         * @example `label name :123 not match [a-zA-Z_][a-zA-Z0-9_]*`
         */
        ErrorMessage: string;
    }[];
}
