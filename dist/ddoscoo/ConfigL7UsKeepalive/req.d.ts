export interface ConfigL7UsKeepaliveRequest {
    /**
     * 网站业务的域名。
     * > 域名必须已配置网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有域名。
     * @example `www.aliyun.com`
     */
    "Domain"?: string;
    /**
     * 回源长连接设置参数，使用JSON结构体转化的字符串格式表示，JSON结构体包含以下字段：
     * - **enabled**：Boolean类型 | 必选 | 回源长连接配置开关。
     * - **keepalive_requests**：Integer类型 | 必选 | 长连接复用的请求数量。
     * - **keepalive_timeout**：Integer类型 | 必选 | 长连接的空闲超时时间。
     * @example `{"enabled": true, "keepalive_requests": 1000,"keepalive_timeout": 30}`
     */
    "UpstreamKeepalive": string;
}
