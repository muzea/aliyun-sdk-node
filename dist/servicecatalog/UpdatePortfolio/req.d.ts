export interface UpdatePortfolioRequest {
    /**
     * 产品组合ID。
     * @example `port-bp1yt7582g****`
     */
    "PortfolioId": string;
    /**
     * 产品组合名称。
     * 长度为1~128个字符。
     * @example `DEMO-IT服务`
     */
    "PortfolioName": string;
    /**
     * 产品组合描述。
     * 长度为1~128个字符。
     * @example `这是一个产品组合描述`
     */
    "Description"?: string;
    /**
     * 产品组合提供者。
     * 长度为1~128个字符。
     * @example `IT团队`
     */
    "ProviderName": string;
}
