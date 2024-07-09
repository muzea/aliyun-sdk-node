export interface AddTagToFlinkClusterRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Prometheus实例ID。
     * @example `c5defa51f******c92bd2ef5fb093269`
     */
    "ClusterId": string;
    /**
     * Flink工作空间隶属的主账号ID。
     * @example `198608******7619`
     */
    "TargetUserId": string;
    /**
     * Flink工作空间ID。
     * @example `ab18f***93744d`
     */
    "FlinkWorkSpaceId": string;
    /**
     * Flink工作空间名称。
     * @example `flink-demo`
     */
    "FlinkWorkSpaceName": string;
    /**
     * 资源组 ID。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
}
