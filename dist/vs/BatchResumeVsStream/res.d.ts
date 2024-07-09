export interface BatchResumeVsStreamResponse {
    /**
     * 该条任务请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    ResumeResult: {
        /**
         * 恢复任务结果。
         */
        ResumeResultInfo: {
            /**
             * 操作结果，取值success/fail, 表示成功/失败
             * @example `success`
             */
            Result: string;
            /**
             * 成功或者失败的路数
             * @example `1`
             */
            Count: number;
            /**
             * 错误原因, 取值ok/internal-error,表示成功/内部错误
             * @example `ok`
             */
            Detail: string;
            Channels: {
                /**
                 * 流列表，格式为AppName/StreamName
                 */
                Channel: string[];
            };
        }[];
    };
}
