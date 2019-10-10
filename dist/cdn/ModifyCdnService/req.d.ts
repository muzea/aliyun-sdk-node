interface ModifyCdnServiceRequest {
    "RegionId"?: string;
    /**
    * 开通服务的计费类型：
    * - **PayByTraffic**：流量。
    * - **PayByBandwidth**：带宽峰值。
    * @example `PayByTraffic`
    */ "InternetChargeType": string;
    "OwnerId"?: number;
}
export { ModifyCdnServiceRequest };