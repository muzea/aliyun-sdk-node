export interface SearchCloudGtmMonitorTemplatesResponse {
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPages: number;
    /**
     * 搜索到的健康探测模板总条目数。
     * @example `1`
     */
    TotalItems: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    PageSize: number;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
    Templates: {
        /**
         * 健康探测模板列表。
         */
        Template: {
            /**
             * 健康探测模板ID，唯一标识健康探测模板。
             * @example `mtp-89518052425100**80`
             */
            TemplateId: string;
            /**
             * 健康探测模板的创建时间。
             * @example `2024-03-23T13:09Z`
             */
            CreateTime: string;
            /**
             * 健康探测模板的创建时间（时间戳）。
             * @example `1527690629357`
             */
            CreateTimestamp: number;
            /**
             * 健康探测模板的最后一次修改时间。
             * @example `2024-03-29T13:20Z`
             */
            UpdateTime: string;
            /**
             * 健康探测模板的最后一次修改时间（时间戳）。
             * @example `1527690629357`
             */
            UpdateTimestamp: number;
            /**
             * 健康检查探测模板的名称，一般为了方便配置人员区分和记忆，建议名称可以区分健康检查协议。
             * @example `IPv4-Ping`
             */
            Name: string;
            /**
             * 探测节点IP地址的类型：
             * - IPv4：当探测的目标地址类型为IPv4地址时适用；
             * - IPv6：当探测的目标地址类型为IPv6地址时适用；
             * @example `IPv4`
             */
            IpVersion: string;
            /**
             * 对目标IP地址发起探测的协议类型：
             * - ping
             * - tcp
             * - http
             * - https
             * @example `ping`
             */
            Protocol: string;
            /**
             * 每次检查的时间间隔（秒），默认每间隔1分钟探测一次，健康检查间隔最小支持15秒（面向旗舰版实例开放）。
             * @example `60`
             */
            Interval: number;
            /**
             * 探测超时时间（毫秒），大于超时时间未返回的数据包即判断为健康检查超时：
             * - 2000
             * - 3000
             * - 5000
             * - 10000
             * @example `5000`
             */
            Timeout: number;
            /**
             * 重试次数，连续多次监控出现异常，系统才将应用服务判断为异常，以防止因为一些网络瞬间抖动等其他原因影响监控准确率。重试次数可选值为：
             * - 1
             * - 2
             * - 3
             * @example `2`
             */
            EvaluationCount: number;
            /**
             * 所选节点探测失败比例（%），即健康检查异常的探测点占探测点总数的百分比，当失败比例超过设置的阈值时，将服务地址判断为异常。可设置的失败比例阈值为：
             * - 20
             * - 50
             * - 80
             * - 100
             * @example `50`
             */
            FailureRate: number;
            /**
             * Json 字符串扩展信息，各协议检查所需参数：
             * - http(s)：
             *     **host**：执行HTTP(S)监控时，指定HTTP(S)请求头部信息中携带的Host字段，用于标识需要访问的具体HTTP网站，默认为主域名，如果目标网站的host有特殊要求，请自行修改；
             *   **path**：HTTP路径，用户HTTP(S)健康检查的URL路径配置，系统默认填写“/”；
             *   **code**：当执行HTTP(S)监控时，根据Web服务器的返回码判断Web服务器是否正常工作，大于返回码报警阈值时，系统认为应用服务出现异常：
             *   - 400：Bad Request，即如果HTTP(S)请求携带了错误的请求参数，Web服务器将返回大于400的返回码，如果校验内容设置为“异常码大于400”，请务必在URL路径中填写精确的URL访问路径参数；
             *   - 500：Server Error，即如果Web服务器出现了某些异常，将返回大于500的异常码，系统默认使用大于500的异常码作为报警阈值；
             *   **sni**：是否开启sni，仅在HTTPS协议时使用。SNI（Server Name Indication）是TLS协议的一个扩展，它允许客户端在发起TLS握手时指定想要连接的主机名。由于TLS握手发生在HTTP请求的任何数据被发送之前，SNI允许服务器在发送证书之前知道客户端试图访问的服务，这使得服务器可以选择正确的证书来呈现给客户端。
             *     - true-开启
             *
             *   - false-未开启
             *
             *   **followRedirect**：是否跟随3XX重定向
             *   - true：监控点获取的状态码为3XX (301，302，303， 307，308) 时，跟随跳转；
             *   - false：不跳转；
             * - ping：
             *   **packetNum**：每次Ping监控，同时发出多少个ICMP数据包，可选20、50、100
             *    **packetLossRate**：异常时丢包率，每次ping监控，对发出的ICMP数据包，计算丢包率（%）。丢包率=（丢失数据包/发送的总ICMP数据包数目）* 100%，达到丢包率阈值时，异常报警。丢包率可选值为：10、30、40、80、90、100
             * @example `{\"code\":200,\"path\":\"\\index.htm\",\"host\":\"aliyun.com\"}`
             */
            ExtendInfo: string;
            IspCityNodes: {
                /**
                 * 探测节点列表。
                 */
                IspCityNode: {
                    /**
                     * 国家编码。
                     * @example `001`
                     */
                    CountryCode: string;
                    /**
                     * 国家名称。
                     * @example `中国`
                     */
                    CountryName: string;
                    /**
                     * 城市编码。
                     * @example `503`
                     */
                    CityCode: string;
                    /**
                     * 城市名称。
                     * @example `张家口市`
                     */
                    CityName: string;
                    /**
                     * 探测节点分组类型：
                     * - BGP：BGP节点
                     * - OVERSEAS：国际节点
                     * - ISP：运营商节点
                     * @example `BGP`
                     */
                    GroupType: string;
                    /**
                     * 探测节点分组类型名称。
                     * @example `BGP`
                     */
                    GroupName: string;
                    /**
                     * 运营商编码。
                     * @example `465`
                     */
                    IspCode: string;
                    /**
                     * 运营商名称。
                     * @example `阿里巴巴`
                     */
                    IspName: string;
                }[];
            };
            /**
             * 健康探测模板的备注。
             * @example `test`
             */
            Remark: string;
        }[];
    };
}
