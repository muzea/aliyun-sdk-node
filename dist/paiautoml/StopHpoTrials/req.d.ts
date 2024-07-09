export interface StopHpoTrialsRequest {
    /**
     * 实验id。
     * @example `abcde`
     */
    "ExperimentId"?: string;
    /**
     * 请求body参数。
     */
    "body"?: {
        /**
         * 需要被停止的trial ids。不填则不会有任何trial被停止。
         */
        TrialIds: string[];
    };
}
