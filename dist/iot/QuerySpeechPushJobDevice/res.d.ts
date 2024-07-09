export interface QuerySpeechPushJobDeviceResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.speechsolution.NotSigned`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `speech solution has not been signed`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `AF71BF1D-B552-47CD-B34B-352557627992`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的指定语料推送任务下的设备。
     */
    Data: {
        /**
         * 当前页显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询返回的数据总条数。
         * @example `200`
         */
        Total: number;
        /**
         * 当前页。
         * @example `1`
         */
        PageId: number;
        List: {
            /**
             * 指定语料推送任务下的设备详情。
             */
            Items: {
                /**
                 * 推送任务状态。
                 * - **RUNNING**：运行中。
                 * - **SENDING**：正在发送。
                 * - **CANCEL**：取消。
                 * - **SUCCESS**：成功。
                 * - **TIMEOUT**：超时。
                 * @example `SUCCESS`
                 */
                Status: string;
                /**
                 * 设备上报的错误信息。
                 * @example `device storage limited`
                 */
                ErrorMessage: string;
                /**
                 * 设备名称。
                 * @example `test`
                 */
                DeviceName: string;
                /**
                 * 最近一次修改时间。
                 * @example `1620624606000`
                 */
                GmtModified: number;
                /**
                 * 设备上报的错误码。
                 * - 1：本地空间不足。
                 * - 2：下载失败。
                 * - 3： 语料更新中。
                 * @example `2`
                 */
                ErrorCode: string;
            }[];
        };
    };
}
