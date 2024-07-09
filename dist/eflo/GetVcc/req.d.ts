export interface GetVccRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId"?: string;
    /**
     * 灵骏连接实例ID
     * @example `vcc-cn-zvp2w222***`
     */
    "VccId": string;
    /**
     * 分页参数：当前参数已废弃
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页参数：当前参数已废弃
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页参数：当前参数已废弃
     * @example `false`
     */
    "EnablePage"?: boolean;
    /**
     * popApi 默认不忽略，幂等使用
     * @example `c5e3130a-d02f-11ec-a7d3-0242ac110005`
     */
    "ClientToken"?: string;
}
