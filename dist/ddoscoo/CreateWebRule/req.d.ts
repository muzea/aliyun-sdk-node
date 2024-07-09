export interface CreateWebRuleRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要接入DDoS高防进行防护的网站域名。
     * @example `example.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 源站服务器的地址类型。取值：
     * - **0**：表示源站服务器的IP地址。
     * - **1**：表示源站服务器的域名地址。通常适用于源站和高防之间还部署有其他代理服务（例如WAF）的场景，具体指代理服务的跳转地址（例如WAF CNAME地址）。
     * @example `0`
     */
    "RsType": number;
    /**
     * 网站业务转发规则的详细配置。使用JSON数组转化的字符串格式表示。JSON数组中的每个元素是一个JSON结构体，包含以下字段：
     * - **ProxyRules**：JSONArray类型 | 必选 | 源站服务器信息，包括端口号和服务器地址。数组中每个元素是一个JSON结构体，包含以下字段：
     *     - **ProxyPort**：Integer类型 | 必选 | 协议对应的端口号。
     *     - **RealServers**：StringArray类型 | 必选 | 服务器地址。
     * - **ProxyType**：String类型 | 必选 | 网站协议类型。取值：**http** | **https** | **websocket** | **websockets**。
     * @example `[{"ProxyRules":[{"ProxyPort":443,"RealServers":["192.1.XX.XX"]}],"ProxyType":"https"}]`
     */
    "Rules": string;
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
     * 要关联的防护ID。该参数适用于其他云服务（例如对象存储OSS）集成了DDoS高防的场景。
     * > 该参数在内部测试中，暂时请勿使用。
     * 示例：如果您的OSS服务集成了DDoS高防，则高防会为OSS生产账号分配一组IP资源池，每一个IP资源对应唯一的防护ID。防护ID是一个CNAME地址，该CNAME默认解析到对应的高防IP。防护ID（即CNAME）可以通过解析复用同一个IP，便于灵活调度。
     * > 不允许同时填写**InstanceIds**和**DefenseId**。
     * @example `testid`
     */
    "DefenseId"?: string;
    /**
     * 要关联的DDoS高防实例的ID列表。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceIds"?: string[];
}
