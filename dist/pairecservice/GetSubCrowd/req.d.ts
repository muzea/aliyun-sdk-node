export interface GetSubCrowdRequest {
    /**
     * 人群ID，可通过接口ListCrowds获取。
     * @example `3`
     */
    "CrowdId": string;
    /**
     * 子人群ID，可通过接口ListSubCrowds获取。
     * @example `4`
     */
    "SubCrowdId": string;
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `pairec-cn-abcdefg1234`
     */
    "InstanceId": string;
}
