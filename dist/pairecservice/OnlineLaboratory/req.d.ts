export interface OnlineLaboratoryRequest {
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
         * @example `pairec-test1`
         */
        InstanceId: string;
    };
}
