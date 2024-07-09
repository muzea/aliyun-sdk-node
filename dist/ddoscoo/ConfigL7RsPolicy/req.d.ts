export interface ConfigL7RsPolicyRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
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
     * 回源策略。使用JSON结构体转化的字符串格式表示，JSON结构体包含以下字段：
     *  - **ProxyMode**：String类型 | 必选 | 回源负载均衡算法。取值：
     *     - **ip_hash**：表示IP Hash算法。根据请求来源IP进行HASH映射，将同一个IP的所有请求定向到一个源站服务器。
     *     - **rr**：表示轮询算法。将所有请求轮流分配给不同源站服务器。使用该算法时，您可以根据不同服务器的性能为服务器设置权重。
     *      - **least_time**：表示Least Time算法。该算法通过智能DNS解析能力，保证业务流量从接入防护节点到转发回源站服务器整个链路的时延最短。
     * - **Attributes**：JSONArray类型 | 可选 | 回源参数信息。数组中每个元素包含以下字段：
     *     - **RealServer**：String类型 | 可选 | 源站服务器地址。
     *     - **Attribute**：JSONObject类型 | 可选 | 回源参数。包含以下字段：
     *         - **Weight**：Integer类型 | 可选 | 服务器的权重。仅在使用轮询算法（**ProxyMode**为**rr**）时生效。权重取值范围：**1**~**100**，默认值为**100**。权重越高的服务器分配到的请求越多。
     *         - **ConnectTimeout**：Integer类型 | 可选 | 新建连接超时时间。值范围**1**~**10**秒，默认值为**5**。
     *         - **FailTimeout**：Integer类型 | 可选 | 失效时间，单位秒。值范围**1**~**3600**秒，默认值为**10**。
     *         - **MaxFails**：Integer类型 | 可选 | 最大失败次数，健康检查相关。值范围**1**~**10**秒，默认值为**3**。
     *         - **Mode**：String类型 | 可选 | 主备属性标志。取值：**active**为主。**backup**为备。
     *         - **ReadTimeout**：Integer类型 | 可选 | 读超时时间。值范围**10**~**300**秒，默认值为**120**。
     *         - **SendTimeout**：Integer类型 | 可选 | 写超时时间。值范围**10**~**300**秒，默认值为**120**。
     * @example `{"ProxyMode":"rr","Attributes":[{"RealServer":"1.***.***.1","Attribute":{"Weight":100,"ConnectTimeout":5,"FailTimeout":10,"MaxFails":3,"Mode":"active","ReadTimeout":120,"SendTimeout":120}},{"RealServer":"2.***.***.2","Attribute":{"Weight":100,"ConnectTimeout":5,"FailTimeout":10,"MaxFails":3,"Mode":"active","ReadTimeout":120,"SendTimeout":120}}]}`
     */
    "Policy": string;
    /**
     * 回源重试开关。取值：
     * - **1**：回源重试开。
     * - **0**：回源重试关。
     * @example `1`
     */
    "UpstreamRetry"?: number;
}
