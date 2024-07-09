export interface AddShortUrlRequest {
    /**
     * 原始链接地址。不超过1000个字符。
     * ><notice>短信服务暂时不支持使用此接口。></notice>
     * @example `https://www.****.com/product/sms`
     */
    "SourceUrl": string;
    /**
     * 短链服务名称。不超过13个字符。
     * @example `阿里短链测试`
     */
    "ShortUrlName": string;
    /**
     * 短链服务使用有效期。单位为天，有效期最长为90天。
     * @example `7`
     */
    "EffectiveDays": string;
}
