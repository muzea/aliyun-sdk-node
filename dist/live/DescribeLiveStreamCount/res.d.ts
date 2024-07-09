export interface DescribeLiveStreamCountResponse {
    /**
     * 请求ID。
     * @example `FCFFE4A4-F34F-4EEF-B401-36A01689AFBC`
     */
    RequestId: string;
    StreamCountInfos: {
        /**
         * 流信息统计内容。
         */
        StreamCountInfo: {
            /**
             *  实时流类型。取值：
             * - **raw**：原始流。
             * - **trans**：转码流。
             * @example `raw`
             */
            Type: string;
            /**
             * 在线流数量。
             * @example `3`
             */
            Count: number;
            /**
             * 并发推流数量限制，只有白名单用户才显示。
             * @example `10`
             */
            Limit: number;
            StreamCountDetails: {
                /**
                 * 流统计信息详情。
                 */
                StreamCountDetail: {
                    /**
                     * 视频码率，该字段只有转码流数量统计时才有。
                     * @example `390`
                     */
                    VideoDataRate: number;
                    /**
                     * 视频编码格式。取值：
                     * - **h264**。
                     * - **h265**。
                     * @example `h264`
                     */
                    Format: string;
                    /**
                     * 在线流数量。
                     * @example `2`
                     */
                    Count: number;
                }[];
            };
        }[];
    };
}
