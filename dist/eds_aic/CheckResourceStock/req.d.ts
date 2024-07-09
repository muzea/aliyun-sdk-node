export interface CheckResourceStockRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "BizRegionId": string;
    /**
     * 资源所属的可用区。
     * @example `cn-hangzhou-i`
     */
    "ZoneId"?: string;
    /**
     * 规格ID。
     * @example `acp.basic.small`
     */
    "AcpSpecId"?: string;
}
