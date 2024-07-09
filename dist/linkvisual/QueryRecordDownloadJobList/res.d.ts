export interface QueryRecordDownloadJobListResponse {
    /**
     * 调用结果状态码：
     * - 调用成功，返回200。
     * - 调用失败，返回错误码。详细信息，请参见下文**错误码**。
     * @example `400`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `iot.vision.RequestFailed`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55***B7-4***-4***-8***-D3******F565`
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
     * 调用成功后，返回的任务列表。
     */
    Data: {
        /**
         * 任务总数。
         * @example `1`
         */
        Total: number;
        /**
         * 云端录像下载任务的详细信息。
         */
        JobList: {
            /**
             * 录像文件的生成状态。
             * - **-1**：录像文件生成异常。
             * - **0**：录像文件已生成完毕。
             * - **1**：录像文件正在生成中。
             * @example `-1`
             */
            Status: number;
            /**
             * 下载类型。
             * - **1**：按文件下载。
             * - **2**：设备云端录像按时间范围下载。
             * - **3**：设备本地录像按时间范围下载。
             * @example `1`
             */
            Type: number;
            /**
             * 录像文件生成进度，范围为0~100。
             * @example `90`
             */
            Progress: number;
            /**
             * 录像类型。
             * - **0**：连续录像。
             * - **1**：事件录像。
             * - **2**：主动录像。
             * - **4**：本地上云录像。
             * - **99**：混合类型。
             * @example `0`
             */
            RecordType: number;
            /**
             * 查询范围起始时间，格式为10位的时间戳，单位为秒。取值范围为0~2147483647。
             * @example `1900000000`
             */
            BeginTime: number;
            /**
             * 云端录像下载地址，有效期为1小时。
             * @example `http://*********`
             */
            Url: string;
            /**
             * 文件名，**Type**为1时，显示该参数。
             * @example `testfile`
             */
            FileName: string;
            /**
             * 查询范围结束时间，格式为10位时间戳，单位为秒。 取值范围为0~2147483647。
             * @example `2100000000`
             */
            EndTime: number;
            /**
             * 码流类型。
             * - **0**：主码流。
             * - **1**：辅码流。
             * @example `0`
             */
            StreamType: number;
            /**
             * 任务ID。
             * @example `w2s******`
             */
            JobId: string;
            /**
             * 任务异常原因，当**Status**为**-1**时返回异常信息：
             * - **9441**：网络异常。
             * - **9442**：音视频数据错误。
             * @example `9441`
             */
            JobErrorCode: number;
            /**
             * 设备ID。
             * @example `C47T6xwp6ms4bNlkHRWCg4****`
             */
            IotId: string;
        }[];
    };
}
