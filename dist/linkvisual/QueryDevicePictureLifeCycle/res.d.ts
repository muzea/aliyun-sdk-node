export interface QueryDevicePictureLifeCycleResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `0E2244FD-0AC9-4AB4-A8F0-729D78BE1D77`
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
         * 图片在云端的存储天数。
         * @example `7`
         */
        Day: number;
        /**
         * 设备ID。
         * @example `C47T6xwp6ms4bNlkHRWCg4****`
         */
        IotId: string;
    };
}
