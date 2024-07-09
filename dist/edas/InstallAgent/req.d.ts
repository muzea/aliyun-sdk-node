export interface InstallAgentRequest {
    /**
     * 集群 ID
     * @example `b3e3f77b-462e-****-****-bec8727a4dc8`
     */
    "ClusterId": string;
    /**
     * 实例 ID，如instanceId1,instanceId2
     * @example `2ze7s2v0b789k60pk1af`
     */
    "InstanceIds": string;
    /**
     * 已不再使用
     * @example `true`
     */
    "DoAsync"?: boolean;
}
