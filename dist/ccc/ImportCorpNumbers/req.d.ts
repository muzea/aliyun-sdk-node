export interface ImportCorpNumbersRequest {
    /**
     * 号码列表
     * @example `['02912345678']`
     */
    "NumberList": string;
    /**
     * 业务标签
     * @example `无`
     */
    "TagList"?: string;
    /**
     * 省份
     * @example `陕西`
     */
    "Province"?: string;
    /**
     * 城市
     * @example `西安`
     */
    "City"?: string;
    /**
     * 线路信息
     * @example `阿里通信-陕西线路`
     */
    "Provider": string;
    /**
     * 企业名称
     * @example `xxx公司`
     */
    "CorpName"?: string;
}
