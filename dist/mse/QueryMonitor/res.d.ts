export interface QueryMonitorResponse {
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `ADDD8AB7-8D1C-4697-A83E-410D2607****`
     */
    RequestId: string;
    /**
     * 数据概览。
     * @example `6`
     */
    Data: {
        /**
         * pod名称。
         * @example `mse-xxxxxx-xxxxxx-reg-center-0-0`
         */
        podName: string;
        /**
         * 名称前缀。
         * @example `mse-xxxx-xxxxxx`
         */
        clusterNamePrefix: string;
        /**
         * 数据概览。
         */
        values: any[];
    }[];
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
