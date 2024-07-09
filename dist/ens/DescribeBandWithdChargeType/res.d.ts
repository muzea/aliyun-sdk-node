export interface DescribeBandWithdChargeTypeResponse {
    /**
     * 计费方式信息。
     * @example `{ "BandWidthName": "月95峰值带宽", 			"BandWidthType": "95BandwidthByMonth" 		}`
     */
    BandWithTypeInfo: string;
    /**
     * 计费方式。
     * - ChargeByUnified：统一计费。
     * - ChargeByGrade：分档计费。
     * @example `ChargeByGrade`
     */
    ChargeContractType: string;
    /**
     * 计费周期（目前暂不返回计费周期）。
     * @example `{null}`
     */
    ChargeCycleInfo: string;
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `791049FD-49CE-4667-BD6C-F23094DEDA7A`
     */
    RequestId: string;
}
