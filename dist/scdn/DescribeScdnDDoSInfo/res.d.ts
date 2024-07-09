export interface DescribeScdnDDoSInfoResponse {
    /**
     * 安全防护带宽，单位：G。
     * @example `20`
     */
    SecBandwidth: number;
    /**
     * 请求ID。
     * @example `BFFCDFAD-DACC-484E-9BE6-0AF3B3A0DD23`
     */
    RequestId: string;
    /**
     * 弹性带宽，单位：G。
     * @example `80`
     */
    ElasticBandwidth: number;
}
