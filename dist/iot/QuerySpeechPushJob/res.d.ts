export interface QuerySpeechPushJobResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.speechsolution.NotSigned`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
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
     * 返回的语料推送任务状态列表。
     */
    Data: {
        /**
         * 当前页返回的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询返回的语料推送任务总条数。
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
             * 语料推送任务列表信息。
             */
            Items: {
                /**
                 * 语料推送任务状态。
                 * - **RUNNING**：运行中。
                 * - **CANCEL**：取消。
                 * - **SUCCESS**：成功。
                 * - **TIMEOUT**：超时。
                 * @example `RUNNING`
                 */
                Status: string;
                /**
                 * 语料推送成功的设备数。
                 * @example `1`
                 */
                SuccessDeviceNum: number;
                /**
                 * 语料数。
                 * @example `1`
                 */
                SpeechNum: number;
                /**
                 * 设备名称。
                 * @example `test`
                 */
                DeviceName: string;
                /**
                 * 推送失败的设备数。
                 * @example `1`
                 */
                FailDeviceNum: number;
                /**
                 * 推送模式。
                 * - **SINGLE_DEVICE**：单设备推送。
                 * - **ALL**：全量设备推送。
                 * - **GROUP_DEVICE**：分组设备推送。
                 * @example `ALL`
                 */
                PushMode: string;
                /**
                 * 推送语料是否完整。
                 * - **true**：完整。
                 * - **false**：不完整。
                 * @example `true`
                 */
                SpeechStatus: boolean;
                /**
                 * 产品的唯一标识。
                 * @example `den0ZLt****`
                 */
                ProductKey: string;
                /**
                 * 分组名称。
                 * @example `测试分组`
                 */
                GroupName: string;
                /**
                 * 分组ID。
                 * @example `test_group`
                 */
                GroupId: string;
                /**
                 * 推送任务的到期时间。
                 * @example `1620634297000`
                 */
                ExpiredTime: number;
                /**
                 * 运行中的设备数。
                 * @example `2`
                 */
                RunningDeviceNum: number;
                /**
                 * 推送任务ID。
                 * @example `tBUm***********************QPGT`
                 */
                Code: string;
                /**
                 * 总设备数。
                 * @example `3`
                 */
                TotalDeviceNum: number;
                /**
                 * 推送任务的创建时间。
                 * @example `1620634297000`
                 */
                CreatedTime: number;
                /**
                 * 设备ID。
                 * @example `0iOf*****************n001`
                 */
                IotId: string;
            }[];
        };
    };
}
