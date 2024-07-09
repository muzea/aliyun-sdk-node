export interface SaveDataSourceOrderConfigRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `c160c841c8e54295bf2f441432785944_p_efm`
     */
    "AgentKey": string;
    /**
     * 产品类型 可选值 miaobi, miaosou
     * @example `miaobi`
     */
    "ProductCode": string;
    /**
     * 用户数据源配置
     */
    "UserConfigDataSourceList": {
        /**
         * 数量
         * @example `20`
         */
        Number: number;
        /**
         * code描述
         * @example `QuarkCommonNews`
         */
        Code: string;
        /**
         * 显示名称
         * @example `夸克通用搜索`
         */
        Name: string;
        /**
         * type类型
         * @example `SystemSearch`
         */
        Type: string;
    }[];
}
