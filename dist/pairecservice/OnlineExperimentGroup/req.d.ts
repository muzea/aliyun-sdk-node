export interface OnlineExperimentGroupRequest {
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
    };
}
