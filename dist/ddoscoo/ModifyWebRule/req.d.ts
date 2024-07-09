export interface ModifyWebRuleRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要操作的网站业务的域名。
     * > 域名必须已经配置过网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有已经配置过网站业务转发规则的域名。
     * @example `www.aliyun.com`
     */
    "Domain": string;
    /**
     * 网站业务转发规则的协议信息。使用JSON数组转化的字符串格式表示。JSON数组中的每个元素是一个JSON结构体，包含以下字段：
     * - **ProxyType**：String类型 | 必选 | 网站协议类型。取值：**http** | **https** | **websocket** | **websockets**。
     * - **ProxyPorts**：array类型 | 必选 | 协议对应的端口号。
     * @example `[{"ProxyType":"https","ProxyPorts":[443]}]`
     */
    "ProxyTypes": string;
    /**
     * 源站服务器的地址类型。取值：
     * - **0**：表示源站服务器的IP地址。
     * - **1**：表示源站服务器的域名地址。通常适用于源站和高防之间还部署有其他代理服务（例如WAF）的场景，具体指代理服务的跳转地址（例如WAF CNAME地址）。
     * @example `0`
     */
    "RsType": number;
    /**
     * HTTPS高级设置，仅在网站协议类型支持HTTPS（**ProxyType**包含**https**）时生效。使用JSON结构体转化的字符串格式表示，JSON结构体包含以下字段：
     * - **Http2https**：Integer类型 | 可选 | 是否开启HTTPS的强制跳转功能，取值：**0**（表示关闭） | **1**（表示开启），默认关闭。
     *     适用于您的网站同时支持HTTP和HTTPS协议。开启该设置后，所有HTTP请求将强制转换为HTTPS请求，且默认跳转到443端口。
     * - **Https2http**：Integer类型 | 可选 | 是否开启HTTP回源功能，取值：**0**（表示关闭） | **1**（表示开启），默认关闭。
     *     适用于您的网站不支持HTTPS回源。开启该设置后，所有HTTPS协议请求将通过HTTP回源（Websockets协议会通过Websocket回源），且默认回源端口为80。
     * - **Http2**：Integer类型 | 可选 | 是否启用HTTP2.0协议类型，取值：**0**（表示关闭） | **1**（表示开启），默认关闭。
     *     开启该设置后，协议版本为HTTP2.0。
     * @example `{"Http2":1,"Http2https":1,"Https2http":1}`
     */
    "HttpsExt"?: string;
    /**
     * 源站服务器地址列表。
     * @example `1.xxx.xxx.1`
     */
    "RealServers": string[];
    /**
     * 要关联的DDoS高防实例的ID列表。最多支持关联100个实例。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceIds"?: string[];
}
