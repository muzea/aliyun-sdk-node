export interface DeleteShortUrlRequest {
    /**
     * 原始链接地址。不超过1000个字符。
     * ><notice>短信服务暂时不支持使用此接口。></notice>
     * @example `https://www.****.com/product/sms`
     */
    "SourceUrl": string;
}
