export interface UpdateVccRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId"?: string;
    /**
     * 灵骏连接实例ID
     * @example `vcc-cn-zvp2w222001`
     */
    "VccId": string;
    /**
     * 灵骏连接实例的带宽峰值，单位mbps。取值范围：1000~400000
     * @example `1000`
     */
    "Bandwidth"?: number;
    /**
     * 灵骏连接实例名称
     * @example `vcc-heyuan-backup`
     */
    "VccName"?: string;
    /**
     * 订单ID
     * @example `20006627643`
     */
    "OrderId"?: string;
}
