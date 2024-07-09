export interface ReplaceDedicatedHostRequest {
    /**
     * 目标主机所在地域ID。可调用[DescribeDedicatedHostAttribute](~~213010~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 主机ID。可调用[DescribeDedicatedHosts](~~200944~~)获取目标主机ID。
     * @example `ch-bp10a5id3boqi****`
     */
    "DedicatedHostId": string;
    /**
     * 实例主库的切换方案。取值：
     * - **MaintainTime**（默认）：在实例维护时间段切换，等待当前主机上的主实例都切换成其他主机的备实例后再重启主机，避免影响业务。
     * - **Immediate**：立即强制重启主机。
     * @example `MaintainTime`
     */
    "FailoverMode": string;
}
