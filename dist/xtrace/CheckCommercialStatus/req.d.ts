export interface CheckCommercialStatusRequest {
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 服务Code。
     * xtrace：可观测链路 OpenTelemetry 版
     * @example `xtrace`
     */
    "Service": string;
}
