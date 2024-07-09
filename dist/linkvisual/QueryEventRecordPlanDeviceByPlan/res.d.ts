export interface QueryEventRecordPlanDeviceByPlanResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `06DC77A0-4622-42DB-9EE0-25FIOHS82JK1`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `tenant auth error`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 每页显示的条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `2`
         */
        Total: number;
        /**
         * 总页数。
         * @example `1`
         */
        PageCount: number;
        /**
         * 当前页面号。
         * @example `1`
         */
        Page: number;
        /**
         * 设备信息。
         */
        List: {
            /**
             * 码流类型：
             * - **0**：主码流
             * - **1**：辅码流
             * @example `1`
             */
            StreamType: number;
            /**
             * 摄像头的设备ID。
             * @example `P7WqhWvhplhHlWPO9Op5g4****`
             */
            IotId: string;
        }[];
    };
}
