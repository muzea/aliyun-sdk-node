export interface SetCenInterRegionBandwidthLimitRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6jmx****`
     */
    "CenId": string;
    /**
     * 本端地域ID。
     * 您可以调用[DescribeChildInstanceRegions](~~132080~~)接口获取云企业网支持加载的网络实例的地域信息。
     * @example `cn-hangzhou`
     */
    "LocalRegionId": string;
    /**
     * 对端地域ID。
     * @example `us-west-1`
     */
    "OppositeRegionId": string;
    /**
     * 两个地域之间的跨地域互通带宽。单位：Mbps。
     * @example `8`
     */
    "BandwidthLimit": number;
    /**
     * 带宽的分配方式。取值：
     * - **BandwidthPackage**：从带宽包中分配带宽。
     * @example `默认为BandwidthPackage`
     */
    "BandwidthType"?: string;
}
