export interface ModifyDomainResourceRequest {
    /**
     * 已接入DDoS高防防护的网站业务的域名。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 源站服务器的地址类型。取值：
     * - **0**：表示设置源站服务器的IP地址。
     * - **1**：表示设置源站服务器的域名地址。
     * 	适用于源站和DDoS高防之间还部署有其他代理服务（例如WAF）的场景，具体指代理服务的跳转地址（例如WAF的CNAME地址）。
     * @example `0`
     */
    "RsType": number;
    /**
     * HTTPS高级设置，仅在网站协议类型支持HTTPS（**ProxyType**包含**https**）时生效。使用JSON结构体转化的字符串格式表示，JSON结构体包含以下字段：
     * - **Http2https**：Integer类型 | 可选 | 是否开启HTTPS的强制跳转功能，取值：**0**（表示关闭） | **1**（表示开启），默认关闭。
     * 	适用于您的网站同时支持HTTP和HTTPS协议。开启该设置后，所有HTTP请求将强制转换为HTTPS请求，且默认跳转到443端口。
     * - **Https2http**：Integer类型 | 可选 | 是否开启HTTP回源功能，取值：**0**（表示关闭） | **1**（表示开启），默认关闭。
     * 	适用于您的网站不支持HTTPS回源。开启该设置后，所有HTTPS协议请求将通过HTTP回源（Websockets协议会通过Websocket回源），且默认回源端口为80。
     * - **Http2**：Integer类型 | 可选 | 是否开启HTTP 2.0协议支持，取值：**0**（表示关闭） | **1**（表示开启），默认关闭。
     * 	开启该设置后，协议版本为HTTP 2.0。
     * @example `{"Http2":1,"Http2https":1,"Https2http":1}`
     */
    "HttpsExt"?: string;
    /**
     * 网站的协议及端口配置。
     */
    "ProxyTypes": {
        /**
         * 网站对外服务使用的端口列表。
         */
        ProxyPorts: number[];
        /**
         * 网站对外服务使用的协议类型。取值：
         * - **http**：表示HTTP协议。
         * - **https**：表示HTTPS协议。
         * - **websocket**：表示WebSocket协议。
         * - **websockets**：表示WebSockets协议。
         * @example `https`
         */
        ProxyType: string;
    }[];
    /**
     * 源站服务器地址列表。
     */
    "RealServers": string[];
    /**
     * 要关联的DDoS高防实例的ID列表。
     */
    "InstanceIds": string[];
}
