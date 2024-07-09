export interface QueryRecordByRecordIdResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `F46E12A5-633D-4761-80F2-285752A052D5`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `RecordId is mandatory for this action.`
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
     * 返回信息。
     */
    Data: {
        /**
         * 录像结束时间。
         * @example `2020-10-12 14:07:31`
         */
        EndTime: string;
        /**
         * 录像文件名。
         * @example `test`
         */
        FileName: string;
        /**
         * 录像文件的URL。
         * @example `https://iotx-vision-vod-vpc-hz-pre.aliyun-inc.com/vod/device/localrecord/flv/play/1****668.flv?token=e9****a9e14482c56be52&session=470e****3d015`
         */
        VodUrl: string;
        /**
         * 录像开始时间。
         * @example `2020-10-12 14:07:20`
         */
        BeginTime: string;
    }[];
}
