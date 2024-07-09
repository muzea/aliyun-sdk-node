export interface RestartHpoTrialsRequest {
    /**
     * 实验id。
     * @example `abcde`
     */
    "ExperimentId"?: string;
    /**
     * 请求体。TrialIds和TrialHyperParameters二者必须填写一个。如果都不提供则不会触发服务端任何操作。如果都填了，则只对TrialIds执行操作。
     */
    "body"?: {
        /**
         * 需要重新运行的、已经存在的trial ids。
         */
        TrialIds: string[];
        /**
         * 一个新的trial的超参配置，实验会用这组超参启动一个新trial
         * @example `‘{"${batch_size}": "32", "${lr}": "0.01"}'`
         */
        TrialHyperParameters: string;
    };
}
