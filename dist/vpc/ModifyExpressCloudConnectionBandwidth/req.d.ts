export interface ModifyExpressCloudConnectionBandwidthRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 高速上云服务带宽。
     * @example `2`
     */
    "Bandwidth"?: string;
    /**
     * 高速上云服务实例ID。
     * @example `ecc-xxxxxxxxx`
     */
    "EccId": string;
}
