export interface UpdateCustomTextRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxxxx_p_efm`
     */
    "AgentKey": string;
    /**
     * 主键ID
     * @example `96`
     */
    "Id": number;
    /**
     * 标题
     * @example `标题`
     */
    "Title"?: string;
    /**
     * 内容
     * @example `内容`
     */
    "Content"?: string;
    /**
     * 商品code
     * @example `商品code`
     */
    "CommodityCode"?: string;
}
