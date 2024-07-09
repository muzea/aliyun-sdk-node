export interface ReleaseInstanceRequest {
    /**
     * 实例ID。
     * @example `alikafka_post-cn-mp919o4v****`
     */
    "InstanceId": string;
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否立即释放实例的物理资源。取值：
     * - **true** ：立即释放实例的物理资源。
     * - **false**：实例物理资源会保留一段时间才释放。
     * @example `false`
     */
    "ForceDeleteInstance"?: boolean;
}
