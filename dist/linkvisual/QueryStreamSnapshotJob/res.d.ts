export interface QueryStreamSnapshotJobResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `403`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `Request forbidden.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55***B7-4***-4***-8***-D3******F565`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功返回的结果。
     */
    Data: {
        /**
         * 任务信息。
         */
        JobList: {
            /**
             * 码流类型。
             * - **0**：主码流 。
             * - **1**：辅码流。
             * @example `0`
             */
            StreamType: number;
            /**
             * 截图时间的间隔。
             * @example `600`
             */
            SnapshotInterval: number;
        }[];
    };
}
