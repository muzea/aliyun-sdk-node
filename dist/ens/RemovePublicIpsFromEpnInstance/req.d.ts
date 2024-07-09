export interface RemovePublicIpsFromEpnInstanceRequest {
    /**
     * 边边通信实例ID。
     * @example `epn-xxxx`
     */
    "EPNInstanceId": string;
    /**
     * 要删除的公网IP信息。
     * @example `[{"PublicIpAddress":"2.230.XX.XX"},{"PublicIpAddress":"2.230.XX.XX"}]`
     */
    "InstanceInfos": string;
}
