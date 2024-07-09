export interface GetCustomTextRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxxxx_p_efm`
     */
    "AgentKey": string;
    /**
     * 主键ID
     * @example `63`
     */
    "Id": number;
    /**
     * 商品code
     * @example `商品code`
     */
    "CommodityCode"?: string;
}
