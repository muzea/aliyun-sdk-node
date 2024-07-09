export interface GetMediaDNAResultResponse {
    /**
     * 请求ID。
     * @example `63FC4896-E956-4B*****7D-134FF1BC597A`
     */
    RequestId: string;
    /**
     * DNA结果。
     */
    DNAResult: {
        /**
         * 视频DNA识别结果。
         */
        VideoDNA: {
            /**
             * 相似视频ID。
             * @example `6ad8987da46f4b*****490ce2873745`
             */
            PrimaryKey: string;
            /**
             * 视频相似度。相似度1是指相似度100%。
             * @example `0.98`
             */
            Similarity: string;
            /**
             * 相似视频详情。包括视频的位置、时长等。
             */
            Detail: {
                /**
                 * 输入视频的开始时间和时长。
                 */
                Input: {
                    /**
                     * 视频的时长。单位：秒。
                     * @example `12.0`
                     */
                    Duration: string;
                    /**
                     * 视频的开始时间。单位：秒。
                     * @example `2.0`
                     */
                    Start: string;
                };
                /**
                 * 库中视频的开始时间和时长。
                 */
                Duplication: {
                    /**
                     * 视频的时长。单位：秒。
                     * @example `12.0`
                     */
                    Duration: string;
                    /**
                     * 视频的开始时间。单位：秒。
                     * @example `2.0`
                     */
                    Start: string;
                };
            }[];
        }[];
    };
}
