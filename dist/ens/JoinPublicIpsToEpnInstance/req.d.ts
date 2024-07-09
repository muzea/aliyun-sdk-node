export interface JoinPublicIpsToEpnInstanceRequest {
    /**
     * 边边网络实例ID。
     * @example `epn-xxxx`
     */
    "EPNInstanceId": string;
    /**
     * 要添加的公网实例信息。
     * @example `InstanceInfos=[{"PublicIpAddress":"2.230.XX.XX"},{"PublicIpAddress":"2.230.XX.XX"}]`
     */
    "InstanceInfos": string;
}
