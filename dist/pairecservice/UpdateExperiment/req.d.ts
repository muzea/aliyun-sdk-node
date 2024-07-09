export interface UpdateExperimentRequest {
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-cn-abcdefg1234`
         */
        InstanceId: string;
        /**
         * 实验名称。
         * @example `experiment_test`
         */
        Name: string;
        /**
         * 实验描述。
         * @example `This is a test.`
         */
        Description: string;
        /**
         * 实验类型。
         * ● Baseline-基准实验。
         * ● Normal-普通实验。
         * @example `Baseline`
         */
        Type: string;
        /**
         * 流量分配百分比。
         * @example `100`
         */
        FlowPercent: number;
        /**
         * 调试用户（需为阿里云账户主账号/子账号uid），多个用户需通过逗号作间隔。
         * @example `1124512470******,1124512471******,1124512472******`
         */
        DebugUsers: string;
        /**
         * 调试人群ID，可通过接口ListCrowds获取。
         * @example `3`
         */
        DebugCrowdId: string;
        /**
         * 实验配置。
         * @example `{"RankBy": "Score"}`
         */
        Config: string;
    };
    /**
     * 实验ID，可通过接口ListExperiments获取。
     * @example `3`
     */
    "ExperimentId": string;
}
