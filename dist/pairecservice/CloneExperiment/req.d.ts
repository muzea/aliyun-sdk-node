export interface CloneExperimentRequest {
    /**
     * 实验ID。
     * @example `experiment_test`
     */
    "ExperimentId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-cn-abcdefg1234
        `
         */
        InstanceId: string;
    };
}
