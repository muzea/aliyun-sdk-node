export interface DescribeVodTranscodeDataResponse {
    /**
     * 返回数据的时间颗粒度。取值：
     * - **hour**：小时数据。
     * - **day**：天数据。
     * @example `day`
     */
    DataInterval: string;
    /**
     * 请求ID。
     * @example `C370DAF1-C838-4288-****-9A87633D248E`
     */
    RequestId: string;
    TranscodeData: {
        /**
         * 转码用量数据。
         */
        TranscodeDataItem: {
            /**
             * 数据时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-02-01T16:00:00Z`
             */
            TimeStamp: string;
            Data: {
                /**
                 * 转码用量详细数据。
                 */
                DataItem: {
                    /**
                     * 转码规格。取值：
                     * - **Audio**：音频。
                     * - **Segmentation**：转封装。
                     * - **H264.LD、H264.SD、H264.HD、H264.2K、H264.4K**等。
                     * @example `H264.SD`
                     */
                    Name: string;
                    /**
                     * 转码时长。单位：秒。
                     * @example `111`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
