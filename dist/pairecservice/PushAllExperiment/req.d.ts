export interface PushAllExperimentRequest {
    /**
     * 实验ID，可通过接口ListExperiments获取。
     * @example `3`
     */
    "ExperimentId": string;
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-cn-abcdefg1234`
         */
        InstanceId: string;
    };
}
