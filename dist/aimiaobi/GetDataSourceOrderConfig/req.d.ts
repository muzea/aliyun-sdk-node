export interface GetDataSourceOrderConfigRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `d9a1f6146a37446495d9985c2e7b267e_p_outbound_public`
     */
    "AgentKey": string;
    /**
     * 配置类型 可选值 miaobi、miaosou
     * @example `miaobi`
     */
    "ProductCode": string;
}
