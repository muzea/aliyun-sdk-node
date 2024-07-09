export interface ExtractNameRequest {
    /**
     * 固定值:addrp
     * @example `addrp`
     */
    "ServiceCode": string;
    /**
     * 文本内容
     * @example `文一西路969号张小明`
     */
    "Text": string;
    /**
     * 默认省份
     * @example `浙江省`
     */
    "DefaultProvince"?: string;
    /**
     * 默认城市
     * @example `杭州市`
     */
    "DefaultCity"?: string;
    /**
     * 默认行政区
     * @example `余杭区`
     */
    "DefaultDistrict"?: string;
    /**
     * 项目AppKey
     * @example `Axqwerasdf1a`
     */
    "AppKey": string;
}
