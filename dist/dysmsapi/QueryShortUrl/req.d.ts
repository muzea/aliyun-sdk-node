export interface QueryShortUrlRequest {
    /**
     * 生成的短链服务地址。可通过[AddShortUrl](~~186774~~)接口获取。
     * ><notice>短信服务暂时不支持使用此接口。></notice>
     * @example `http://****.cn/6y8uy7`
     */
    "ShortUrl": string;
}
