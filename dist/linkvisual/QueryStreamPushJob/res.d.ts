export interface QueryStreamPushJobResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `400`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `Request parameter error.`
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
         * 推流任务类型。
         * - **1**：持续型任务。
         * - **2**：触发式任务，中断后结束。
         * @example `1`
         */
        JobType: number;
        /**
         * 推流地址。
         * @example `rtmp://****`
         */
        PushUrl: string;
        /**
         * 码流类型。
         * - **0**：主码流 。
         * - **1**：辅码流。
         * @example `1`
         */
        StreamType: number;
        /**
         * 任务创建时间，单位为秒。
         * @example `1581595942`
         */
        CreateTime: number;
        /**
         * 当前推流状态。
         * - **1**：正在推流。
         * - **2**：等待推流。
         * - **3**：推流结束。
         * @example `1`
         */
        PushStatus: number;
    };
}
