export interface DescribeSagWan4GResponse {
    /**
     * 4G网卡状态：
     * - **Normal**：状态正常。
     * - **Abnormal**：状态异常。
     * - **Unavailable**：无4G网卡。
     * @example `Normal`
     */
    Status: string;
    /**
     * 4G网卡流量状态。
     * - **active**：表示该4G网卡为主用链路，当前流量经过该4G网卡进行传输。
     * - **standby**：表示该4G网卡为备用链路，暂不转发流量。在主用链路故障后，流量经过该4G网卡进行传输。
     * @example `active`
     */
    TrafficState: string;
    /**
     * 请求ID。
     * @example `CE6642D4-21EB-4168-9BF9-F217953F9892`
     */
    RequestId: string;
    /**
     * 4G网卡优先级。优先级默认值为**99**，表示最低优先级，且优先级不支持调整。
     * @example `99`
     */
    Priority: number;
    /**
     * 4G网卡IP地址。
     * @example `192.XX.XX.1`
     */
    Ip: string;
    /**
     * 4G信号强度：
     * -  **High**：强。
     * -  **Middle**：中。
     * -  **Low**：弱。
     * - **Unavailable**：无信号。
     * @example `High`
     */
    Strength: string;
    /**
     * 4G网卡MAC地址。
     * @example `c4:00:ad:a2:f5:****`
     */
    Mac: string;
}
