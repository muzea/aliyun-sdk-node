export interface DescribeLiveStreamsTotalCountResponse {
    /**
     * 请求ID。
     * @example `String	FCFFE4A4-F34F-4EEF-B401-36A01689AFBC`
     */
    RequestId: string;
    StreamCountList: {
        /**
         * 流信息统计内容。
         */
        StreamCountInfos: {
            /**
             * 累计直播流数量。
             * @example `934`
             */
            Count: number;
            /**
             * 时间。
             * @example `2023-07-24T16:00:00Z`
             */
            Timestamp: string;
        }[];
    };
}
