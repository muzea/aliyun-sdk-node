export interface GetLaboratoryRequest {
    /**
     * 实验室ID，可通过接口ListLaboratories获取。
     * @example `3`
     */
    "LaboratoryId": string;
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `pairec-test1`
     */
    "InstanceId": string;
}
