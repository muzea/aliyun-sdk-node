export interface ListInterveneCntRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `fcb14f25c9ee41ccad33a049de8f941b_p_outbound_public`
     */
    "AgentKey": string;
    /**
     * 页面尺寸
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页号
     * @example `1`
     */
    "PageIndex"?: number;
}
