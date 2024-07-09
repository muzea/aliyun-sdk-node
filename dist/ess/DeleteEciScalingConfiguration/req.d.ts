export interface DeleteEciScalingConfigurationRequest {
    /**
     * 待删除伸缩配置的ID。
     * @example `asc-bp1bx8mzur534edp****`
     */
    "ScalingConfigurationId": string;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
}
