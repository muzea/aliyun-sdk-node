export interface CloneExperimentGroupRequest {
    /**
     * 实验组ID，可通过接口ListExperimentGroups获取。
     * @example `3`
     */
    "ExperimentGroupId": string;
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-cn-abcdefg1234
        `
         */
        InstanceId: string;
        /**
         * 层ID，可通过接口ListLayers获取。
         * @example `3`
         */
        LayerId: string;
        /**
         * 克隆到的环境。
         * ● Daily-日常环境
         * ● Pre-预发环境
         * ● Prod-生产环境
         * @example `Daily`
         */
        Environment: string;
    };
}
