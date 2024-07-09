export interface JoinVSwitchesToEpnInstanceRequest {
    /**
     * 边边通信实例ID。
     * @example `epn-xxxx`
     */
    "EPNInstanceId": string;
    /**
     * 需要添加的内网组网信息。
     * @example `[{"VSwitchId":"vs-ixxxx"},{"VSwitchId":"vs-ixxxx"}]`
     */
    "VSwitchesInfo": string;
}
