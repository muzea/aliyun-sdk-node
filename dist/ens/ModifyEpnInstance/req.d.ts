export interface ModifyEpnInstanceRequest {
    /**
     * 边边网络实例ID。
     * @example `epn-****`
     */
    "EPNInstanceId": string;
    /**
     * 边边网络实例名称。
     * @example `ens_test_epn`
     */
    "EPNInstanceName"?: string;
    /**
     * 组网模式，取值：
     * - **SpeedUp**：智能加速（外网）。
     * - **Connection**：内网联通（内网模式）。
     * - **SpeedUpAndConnection**：智能加速及内网联通（内网模式）。
     * > 内网模式只能在**Connection**和**SpeedUpAndConnection**之间进行切换。
     * @example `SpeedUp`
     */
    "NetworkingModel"?: string;
    /**
     * 公网出带宽最大值，单位为Mbit/s。取值范围：1Mbit/s～100Mbit/s。
     * @example `10`
     */
    "InternetMaxBandwidthOut"?: number;
}
