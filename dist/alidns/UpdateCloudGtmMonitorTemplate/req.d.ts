export interface UpdateCloudGtmMonitorTemplateRequest {
    /**
     * 返回结果显示的语言。取值：
     * - zh-CN：中文
     * - en-US：英文
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。注意  由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 需要修改的健康探测模板ID，唯一标识健康探测模板。
     * @example `mtp-89518052425100**80`
     */
    "TemplateId": string;
    /**
     * 健康检查探测模板的名称，一般为了方便配置人员区分和记忆，建议名称可以区分健康检查协议。
     * @example `Ping-IPv4
    `
     */
    "Name"?: string;
    /**
     * 每次健康探测的时间间隔（秒），默认每间隔1分钟探测一次，健康检查间隔最小支持15秒（面向旗舰版实例开放）。
     * @example `60`
     */
    "Interval"?: number;
    /**
     * 探测超时时间（毫秒），大于超时时间未返回的数据包即判断为健康检查超时：
     * - 2000
     * - 3000
     * - 5000
     * - 10000
     * @example `5000`
     */
    "Timeout"?: number;
    /**
     * 重试次数，连续多次监控出现异常，系统才将应用服务判断为异常，以防止因为一些网络瞬间抖动等其他原因影响监控准确率。重试次数可选值为：
     * - 1
     * - 2
     * - 3
     * @example `2`
     */
    "EvaluationCount"?: number;
    /**
     * 所选节点探测失败比例（%），即健康检查异常的探测点占探测点总数的百分比，当失败比例超过设置的阈值时，将服务地址判断为异常。可设置的失败比例阈值为：
     * - 20
     * - 50
     * - 80
     * - 100
     * @example `50`
     */
    "FailureRate"?: number;
    /**
     * Json 字符串扩展信息，各协议检查所需参数：
     * - http(s)：
     *     host：执行HTTP(S)监控时，指定HTTP(S)请求头部信息中携带的Host字段，用于标识需要访问的具体HTTP网站，默认为主域名，如果目标网站的host有特殊要求，请自行修改；
     *   path：HTTP路径，用户HTTP(S)健康检查的URL路径配置，系统默认填写“/”；
     *   code：当执行HTTP(S)监控时，根据Web服务器的返回码判断Web服务器是否正常工作，大于返回码报警阈值时，系统认为应用服务出现异常：
     *   - 400：Bad Request，即如果HTTP(S)请求携带了错误的请求参数，Web服务器将返回大于400的返回码，如果校验内容设置为“异常码大于400”，请务必在URL路径中填写精确的URL访问路径参数；
     *   - 500：Server Error，即如果Web服务器出现了某些异常，将返回大于500的异常码，系统默认使用大于500的异常码作为报警阈值；
     *   sni：是否开启sni，仅在HTTPS协议时使用。SNI（Server Name Indication）是TLS协议的一个扩展，它允许客户端在发起TLS握手时指定想要连接的主机名。由于TLS握手发生在HTTP请求的任何数据被发送之前，SNI允许服务器在发送证书之前知道客户端试图访问的服务，这使得服务器可以选择正确的证书来呈现给客户端。
     *     - true-开启
     *
     *   - false-未开启
     *
     *   followRedirect：是否跟随3XX重定向
     *   - true：监控点获取的状态码为3XX (301，302，303， 307，308) 时，跟随跳转；
     *   - false：不跳转；
     * - ping：
     *   packetNum：每次Ping监控，同时发出多少个ICMP数据包，可选20、50、100
     *   packetLossRate：异常时丢包率，每次ping监控，对发出的ICMP数据包，计算丢包率（%）。丢包率=（丢失数据包/发送的总ICMP数据包数目）* 100%，达到丢包率阈值时，异常报警。丢包率可选值为：10、30、40、80、90、100
     * @example `{\"code\":200,\"path\":\"\\index.htm\",\"host\":\"aliyun.com\"}`
     */
    "ExtendInfo"?: string;
    /**
     * 探测节点列表，具体信息可通过调用 **ListCloudGtmMonitorNodes** 获取
     */
    "IspCityNodes"?: {
        /**
         * 探测节点-城市编码
         * @example `503`
         */
        CityCode: string;
        /**
         * 探测节点-运营商编码
         * @example `465`
         */
        IspCode: string;
    }[];
}
