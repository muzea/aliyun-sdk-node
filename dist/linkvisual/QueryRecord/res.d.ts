export interface QueryRecordResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
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
     * @example `tenant auth error.`
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
         * 当前页码。
         * @example `1`
         */
        Page: number;
        /**
         * 每页显示的条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 返回的录像列表。
         */
        List: {
            /**
             * 缩略图地址。
             * @example `https://lin****​/****2Cq_90`
             */
            SnapshotUrl: string;
            /**
             * 录像结束时间。
             * @example `2018-09-10 00:00:30`
             */
            EndTime: string;
            /**
             * 录像类型（**RecordType**）为**智能告警事件录像**时返回该参数，表示录像对应的事件类型。
             * 例如：**1**表示移动侦测事件。
             * @example `1`
             */
            EventType: number;
            /**
             * 录像类型：
             * - **0**：连续录像。
             * - **1**：智能告警事件录像。
             * - **2**：主动录像。
             * @example `1`
             */
            RecordType: number;
            /**
             * 码流类型：
             * - **0**：主码流。
             * - **1**：辅码流。
             * @example `1`
             */
            StreamType: number;
            /**
             * 录像开始时间。
             * @example `2018-09-10 00:00:00`
             */
            BeginTime: string;
            /**
             * 录像文件名。
             * @example `file1`
             */
            FileName: string;
            /**
             * 录像文件的视频帧数。
             * @example `1352`
             */
            VideoFrameNumber: number;
            /**
             * 录像文件大小，单位为字节。
             * @example `204800`
             */
            FileSize: number;
        }[];
    };
}
