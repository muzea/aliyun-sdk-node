export interface GetAlipayUrlRequest {
    /**
     * 业务类型
     * @example `esp.beian_assist`
     */
    "BizType": string;
    /**
     * 终端类型：网页端-web，手机端-app，默认网页端
     * @example `web`
     */
    "Type": string;
    /**
     * 订单号
     * @example `206129201170307`
     */
    "OrderId": number;
    /**
     * 回调地址
     * @example `https://nfyt.lzsgtghchy.com:502/sigin/`
     */
    "ReturnUrl"?: string;
}
