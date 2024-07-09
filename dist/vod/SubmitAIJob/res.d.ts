export interface SubmitAIJobResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-BEF6-D73936****`
     */
    RequestId: string;
    AIJobList: {
        /**
         * AI作业信息列表。
         */
        AIJob: {
            /**
             * AI作业类型。取值：
             * - **AIMediaDNA**：视频DNA。
             * - **AIVideoTag**：智能标签。
             * @example `AIVideoTag`
             */
            Type: string;
            /**
             * AI作业ID。
             * @example `9e82640c85114bf5af23edfaf****`
             */
            JobId: string;
            /**
             * 视频ID。
             * @example `3D3D12340d92c641401fab46a0b847****`
             */
            MediaId: string;
        }[];
    };
}
