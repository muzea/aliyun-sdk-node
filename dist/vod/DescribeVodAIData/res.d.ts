export interface DescribeVodAIDataResponse {
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
    AIData: {
        /**
         * AI处理用量数据。
         */
        AIDataItem: {
            /**
             * 时间片起始时刻。格式为：`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
             * @example `2019-02-01T13:00:00Z`
             */
            TimeStamp: string;
            Data: {
                /**
                 * AI处理用量详细数据。
                 */
                DataItem: {
                    /**
                     * AI类型。  取值：
                     * - **AIVideoCensor**：智能审核。
                     * - **AIVideoFPShot**：视频DNA。
                     * - **AIVideoTag**：智能标签。
                     * @example `AIVideoCensor`
                     */
                    Name: string;
                    /**
                     * 处理时长。单位：秒。
                     * @example `111`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
