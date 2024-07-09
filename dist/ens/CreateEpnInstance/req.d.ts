export interface CreateEpnInstanceRequest {
    /**
     * 边边通信实例。目前取值仅支持**EdgeToEdge**。
     * @example `EdgeToEdge`
     */
    "EPNInstanceType": string;
    /**
     * 边边网络实例名称。
     * @example `test EPNInstanceName`
     */
    "EPNInstanceName"?: string;
    /**
     * 网络计费类型。取值：
     * - **BandwidthByDay**：日峰值带宽。
     * - **95BandwidthByMonth**：月95峰值带宽。
     * - **PayByBandwidth4thMonth**：月第四峰值带宽。
     * - **PayByBandwidth**：固定规格带宽。
     * 只能有一种计费方式，如果已存在计费方式，则新值默认无效，以已存在的为准。
     * @example `BandwidthByDay`
     */
    "InternetChargeType": string;
    /**
     * 组网模式。取值：
     * - **SpeedUp**：智能加速（外网）。
     * - **Connection**：内网联通（内网模式）。
     * - **SpeedUpAndConnection**：智能加速及内网联通（内网模式）。
     * @example `SpeedUp`
     */
    "NetworkingModel": string;
    /**
     * 公网出带宽最大值，单位为Mbit/s。取值范围：1 Mbit/s～100 Mbit/s。
     * @example `1`
     */
    "InternetMaxBandwidthOut": number;
}
