export interface CreateEipInstanceRequest {
    /**
     * ENS节点ID。
     * @example `cn-suzhou-telecom`
     */
    "EnsRegionId": string;
    /**
     * EIP的带宽峰值，默认值为5。取值范围：5~10000，单位：Mbps。
     * @example `5`
     */
    "Bandwidth"?: number;
    /**
     * EIP的计费方式，当前取值仅支持**PostPaid**（月按量计费）。
     * @example `PostPaid`
     */
    "InstanceChargeType": string;
    /**
     * EIP的计费方式，当前取值仅支持**95BandwidthByMonth**（月95带宽计费）。
     * @example `95BandwidthByMonth`
     */
    "InternetChargeType": string;
    /**
     * EIP实例名称。
     * @example `EIP1`
     */
    "Name"?: string;
    /**
     * 运营商信息，取值：
     * - **cmcc**：中国移动。
     * - **unicom**：中国联通。
     * - **telecom**：中国电信。
     * @example `cmcc`
     */
    "Isp"?: string;
    /**
     * 描述。
     * @example `yourDescription`
     */
    "Description"?: string;
}
