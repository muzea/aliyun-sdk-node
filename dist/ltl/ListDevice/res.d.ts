export interface ListDeviceResponse {
    /**
     * 响应状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 调用失败时，返回的出错信息。
     * @example `The system is busy. Please try again later.`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D5C69894-9709-4653-B3D8-25234034C2FC`
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
     * 响应内容。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        Num: number;
        /**
         * 总条数。
         * @example `30`
         */
        Total: number;
        /**
         * 每页数量。
         * @example `2`
         */
        Size: number;
        /**
         * 数据项
         */
        PageData: {
            /**
             * 授权状态。
             * - **AUTHORIZED**：已授权。
             * - **UNAUTHORIZED**：未授权。
             * @example `AUTHORIZED`
             */
            Status: string;
            /**
             * 最后存证时间。毫秒级时间戳。
             * @example `1606379090866`
             */
            LastSaveTime: number;
            /**
             * 设备标识。
             * @example `876055554040****`
             */
            DeviceId: string;
            /**
             * IoT设备ID。
             * @example `183329761572****`
             */
            IotId: string;
        }[];
    };
}
