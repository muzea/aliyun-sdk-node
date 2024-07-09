export interface CloneLaboratoryRequest {
    /**
     * 实验室ID，可通过接口ListLaboratories获取。
     * @example `3`
     */
    "LaboratoryId": string;
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
         * 运行环境
         * ● Daily-日常环境
         * ● Pre-预发环境
         * ● Prod-生产环境
         * @example `Daily`
         */
        Environment: string;
        /**
         * 是否克隆实验组。
         * @example `true`
         */
        CloneExperimentGroup: boolean;
    };
}
