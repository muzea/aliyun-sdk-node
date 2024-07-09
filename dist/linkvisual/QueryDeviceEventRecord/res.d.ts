export interface QueryDeviceEventRecordResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: number;
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
         * 录像结束时间。
         * @example `2021-09-08 15:56:32`
         */
        EndTime: string;
        /**
         * 录像文件名。
         * @example `file1`
         */
        FileName: string;
        /**
         * 录像文件的URL。
         * > URL中包含鉴权信息，且单次有效，不可重复使用。
         * @example `rtmp://****​/****.mp4`
         */
        VodUrl: string;
        /**
         * 录像开始时间。
         * @example `2021-09-08 15:55:35`
         */
        BeginTime: string;
    }[];
}
