export interface GetMediaAuditAudioResultDetailResponse {
    /**
     * 请求ID。
     * @example `CB7D7232-1AB2-40FE-B8D3-****`
     */
    RequestId: string;
    /**
     * 审核结果。
     */
    MediaAuditAudioResultDetail: {
        /**
         * 总页数。
         * @example `10`
         */
        Total: number;
        /**
         * 当前页数。
         * @example `1`
         */
        PageTotal: number;
        /**
         * 结果列表。
         */
        List: {
            /**
             * 问题音频结束时间点，单位：秒。
             * @example `10`
             */
            EndTime: number;
            /**
             * 问题音频开始时间点。单位：秒。
             * @example `8`
             */
            StartTime: number;
            /**
             * 音频对应文本内容。
             * @example `天安门`
             */
            Text: string;
            /**
             * 音频审核结果分类，取值：
             * - **normal**：正常。
             * - **spam**：含垃圾信息。
             * - **ad**：广告。
             * - **politics**：涉政。
             * - **terrorism**：暴恐。
             * - **abuse**：辱骂。
             * - **porn**：色情。
             * - **flood**：灌水。
             * - **contraband**：违禁。
             * - **meaningless**：无意义。
             * @example `abuse`
             */
            Label: string;
        }[];
    };
}
