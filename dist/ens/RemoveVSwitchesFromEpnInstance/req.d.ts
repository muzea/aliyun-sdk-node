export interface RemoveVSwitchesFromEpnInstanceRequest {
    /**
     * 边边通信实例ID。
     * @example `epn-****`
     */
    "EPNInstanceId": string;
    /**
     * 要删除的内网组网信息。
     * @example `VSwitchesInfo=[{"VSwitchId":"vs-ixxxx"},{"VSwitchId":"vs-ixxxx"}]`
     */
    "VSwitchesInfo": string;
}
