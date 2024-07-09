export interface ListAIJobResponse {
    /**
     * 请求ID。
     * @example `8233A0E4-E112-44*****58-2BCED1B88173`
     */
    RequestId: string;
    NonExistAIJobIds: {
        /**
         * 不存在的作业ID列表。
         */
        String: string[];
    };
    AIJobList: {
        /**
         * 作业信息列表。
         */
        AIJob: {
            /**
             * 作业开始时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z。
             * @example `2020-06-28T02:04:32Z`
             */
            CreationTime: string;
            /**
             * 作业状态。取值：
             * - **success**：成功。
             * - **fail**：失败。
             * - **init**：初始化。
             * - **processing**：处理中。
             * @example `success`
             */
            Status: string;
            /**
             * 作业类型。取值：
             * - **AIMediaDNA**：视频DNA。
             * - **AIVideoTag**：智能标签。
             * @example `AIVideoTag`
             */
            Type: string;
            /**
             * 作业结果数据，JSON数据格式。具体数据结构请参见[AITemplateConfig](~~89863~~)。
             * @example `{"OrigASRData":{"AsrTextList":[{"EndTime":700,"StartTime":0,"Text":"嗯。","ChannelId":0,"SpeechRate":85},{"EndTime":3750,"StartTime":1630,"Text":"的。","ChannelId":0,"SpeechRate":28},{"EndTime":5910,"StartTime":4020,"Text":"听不厌。","ChannelId":0,"SpeechRate":95},{"EndTime":12750,"StartTime":10090,"Text":"留言。","ChannelId":0,"SpeechRate":45},{"EndTime":25230,"StartTime":13590,"Text":"hello，中午好。","ChannelId":0,"SpeechRate":20},{"EndTime":30000,"StartTime":28220,"Text":"嗯。","ChannelId":0,"SpeechRate":33}],"Duration":"30016"}}`
             */
            Data: string;
            /**
             * 作业结束时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z。
             * @example `2020-06-28T02:04:47Z`
             */
            CompleteTime: string;
            /**
             * 作业ID。
             * @example `a718a3a1e8bb42ee3bc88921e94****`
             */
            JobId: string;
            /**
             * 作业错误码。当Status为失败时，可关注该字段。
             * @example `0`
             */
            Code: string;
            /**
             * 作业错误信息。当Status为失败时，可关注该字段。
             * @example `OK`
             */
            Message: string;
            /**
             * 视频ID。
             * @example `3D3D12340d9401fab46a0b847****`
             */
            MediaId: string;
        }[];
    };
}
