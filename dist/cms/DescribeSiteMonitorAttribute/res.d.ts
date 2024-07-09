export interface DescribeSiteMonitorAttributeResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D17DF650-7EBD-54D0-903A-1D4E624D7402`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 监控任务详情。
     */
    SiteMonitors: {
        /**
         * 监控任务类型。目前站点监控任务的类型包括：HTTP（S）、PING、TCP、UDP、DNS、SMTP、POP3、FTP。
         * @example `HTTP`
         */
        TaskType: string;
        /**
         * 监控任务的周期。单位：分钟。取值：1、 5、15、30和60。
         * @example `1`
         */
        Interval: string;
        /**
         * 监控任务的状态。取值：
         * - 1：启用。
         * - 2：禁用。
         * @example `1`
         */
        TaskState: string;
        /**
         * 监控任务名称。
         * @example `test123`
         */
        TaskName: string;
        /**
         * 监控任务的探测地址。
         * @example `https://aliyun.com`
         */
        Address: string;
        /**
         * 监控任务ID。
         * @example `cc641dff-c19d-45f3-ad0a-818a0c4f****`
         */
        TaskId: string;
        IspCities: {
            /**
             * 探测点的运营商和城市。
             */
            IspCity: {
                /**
                 * 城市ID。
                 * @example `738`
                 */
                City: string;
                /**
                 * 运营商名称。
                 * @example `阿里巴巴`
                 */
                IspName: string;
                /**
                 * 运营商ID。
                 * @example `465`
                 */
                Isp: string;
                /**
                 * 城市名称。
                 * @example `北京市`
                 */
                CityName: string;
            }[];
        };
        /**
         * 扩展选项。每一种探测类型有不同的扩展类型，详情请参见[CreateSiteMonitor](~~115048~~)。
         */
        OptionJson: {
            /**
             * HTTP请求内容格式。取值：
             * - hex：十六进制格式。
             * - txt：文本格式。
             * @example `txt`
             */
            request_format: string;
            /**
             * 匹配响应内容。
             * @example `txt`
             */
            response_content: string;
            /**
             * TCP、UDP、SMTP、POP3探测类型的端口。
             * @example `110`
             */
            port: number;
            /**
             * 是否开启安全验证。取值：
             * - 0：否。
             * - 1：是。
             * @example `1`
             */
            authentication: number;
            /**
             * 是否包含报警规则。取值：
             * - 0：是。
             * - 1：否。
             * @example `1`
             */
            match_rule: number;
            /**
             * DNS的匹配规则。取值：
             * - IN_DNS：期望解析的别名或IP地址均在DNS应答中。
             * - DNS_IN：所有的DNS应答都出现在期望解析的别名或IP地址中。
             * - EQUAL：DNS应答和期望解析的别名或IP地址完全相同。
             * - ANY：DNS应答和期望解析的别名或IP地址有交集。
             * @example `IN_DNS`
             */
            dns_match_rule: string;
            /**
             * HTTP探测类型的请求内容。
             * @example `aa=bb`
             */
            request_content: string;
            /**
             * FTP、SMTP或POP3的用户名。
             * @example `testUser`
             */
            username: string;
            /**
             * DNS解析类型。仅适用于DNS探测类型。取值：
             * - A：指定主机名或域名对应的IP地址。
             * - CNAME：将多个域名映射到另外一个域名。
             * - NS：指定域名由某个DNS服务器解析。
             * - MX：将域名指向一个邮件服务器地址。
             * - TXT：主机名或域名的说明。文本长度限制512字节，通常用做SPF（Sender Policy Framework）记录，即反垃圾邮件。
             * @example `A`
             */
            dns_type: string;
            /**
             * HTTP响应内容格式。取值：
             * - hex：十六进制格式。
             * - txt：文本格式。
             * @example `txt`
             */
            response_format: string;
            /**
             * SMTP、POP3或FTP探测类型的密码。
             * @example `123****`
             */
            password: string;
            /**
             * 待解析的别名或地址。
             * > 该参数仅适用于DNS探测类型。
             * @example `dns_server`
             */
            expect_value: string;
            /**
             * 超时时间。单位：毫秒。
             * @example `3`
             */
            time_out: number;
            /**
             * 丢包率。
             * > 该参数仅适用于PING探测类型。
             * @example `0.4`
             */
            failure_rate: number;
            /**
             * HTTP请求头。
             * @example `testKey:testValue`
             */
            header: string;
            /**
             * 发送HTTP请求的Cookie。
             * @example `lang=en`
             */
            cookie: string;
            /**
             * PING探测类型的心跳。
             * @example `29`
             */
            ping_num: number;
            /**
             * HTTP请求方法。取值：
             * - get
             * - post
             * - head
             * @example `get`
             */
            http_method: string;
            /**
             * DNS服务器的IP地址。
             * > 仅适用于DNS探测类型。
             * @example `192.168.XX.XX`
             */
            dns_server: string;
            /**
             * DNS失败后重试次数。
             * @example `3`
             */
            attempts: number;
            /**
             * 探测协议。
             * @example `TCP`
             */
            protocol: string;
            /**
             * 是否对密码进行base64解码存储。取值：
             * - true：对密码进行base64解码存储。
             * - false：不对密码进行base64解码存储。
             * @example `false`
             */
            isBase64Encode: string;
            /**
             * 是否开启任务失败后的自动MTR网络诊断。取值：
             * - false：不开启自动MTR网络诊断。
             * - true  开启自动MTR网络诊断。
             * @example `false`
             */
            diagnosis_mtr: boolean;
            /**
             * 是否开启任务失败后自动PING网络延时探测。取值：
             * - false：不开启自动PING网络延时探测。
             * - true：开启自动PING网络延时探测。
             * @example `false`
             */
            diagnosis_ping: boolean;
            /**
             * 探测失败后重试次数。
             * @example `0`
             */
            retry_delay: number;
            assertions: {
                /**
                 * 断言配置组。
                 */
                assertions: {
                    /**
                     * 断言内容解析路径。
                     * - 如果断言类型为`body_json`，则路径为`json path`。
                     * - 如果断言类型是`body_xml`，则路径为`xml path`
                     * @example `json path`
                     */
                    property: string;
                    /**
                     * 断言类型。取值：
                     * - response_time：判定响应时间是否符合预期。
                     * - status_code：判断HTTP响应状态码是否符合预期。
                     * - header：判定响应Header中的字段是否符合预期。
                     * - body_text：通过文本字符匹配判断返回Body中的内容是否符合预期。
                     * - body_json：通过JSON解析（JSON Path）判断返回Body中的内容是否符合预期。
                     * - body_xml：通过XML解析（XPath）判断返回Body中的内容是否符合预期。
                     * @example `response_time`
                     */
                    type: string;
                    /**
                     * 断言比较操作符。取值：
                     * - contains：包含。
                     * - doesNotContain：不包含。
                     * - matches：正则匹配。
                     * - doesNotMatch：正则不匹配。
                     * - is：数值等于或字符匹配相等。
                     * - isNot：不等于。
                     * - lessThan：小于。
                     * - moreThan：大于。
                     * @example `lessThan`
                     */
                    operator: string;
                    /**
                     * 断言匹配比较的目标数值或字符。
                     * @example `0`
                     */
                    target: string;
                }[];
            };
            /**
             * 最低TLS版本。默认支持TLS1.2及以上版本，TLS1.0和1.1已被禁用，如仍需支持可更改配置
             * @example `tlsv1.2`
             */
            min_tls_version: string;
            /**
             * DNS劫持配置列表。
             * @example `www.taobao.com:www.taobao.com.danuoyi.tbcache.com`
             */
            dns_hijack_whitelist: string;
            /**
             * PING协议类型。取值：
             * - icmp
             * - tcp
             * - udp
             * @example `icmp`
             */
            ping_type: string;
            /**
             * PING端口。适用于TCP PING。
             * @example `80`
             */
            ping_port: number;
            /**
             * 是否忽略证书错误。取值：
             * - false：不忽略证书错误。
             * - true：忽略证书错误。
             * @example `false`
             */
            browser_insecure: boolean;
            browser_info: {
                /**
                 * 浏览器信息。
                 */
                browser_info: {
                    /**
                     * 浏览器类型。
                     * @example `Chrome`
                     */
                    browser: string;
                    /**
                     * 屏幕类型。
                     * @example `laptop`
                     */
                    device: string;
                }[];
            };
            /**
             * 当发生重定向时，如果浏览器加载资源数超过这个值，则认为发生流量劫持。当该值为0时，不进行校验，默认值为0。
             * @example `0`
             */
            traffic_hijack_element_count: number;
            traffic_hijack_element_blacklist: {
                /**
                 * 当发生重定向时，如果浏览器加载资源的URL与该列表中的表达能匹配，则认为发生流量劫持。
                 */
                traffic_hijack_element_blacklist: string[];
            };
            traffic_hijack_element_whitelist: {
                /**
                 * 当发生重定向时，如果浏览器加载资源的URL与该列表中的任意一个表达式都不匹配，则认为发生流量劫持。
                 */
                traffic_hijack_element_whitelist: string[];
            };
            blocked_url_list: {
                /**
                 * 屏蔽的资源URL列表。支持路径通配符。
                 */
                blocked_url_list: string[];
            };
            expect_exist_string: {
                /**
                 * 期待页面中存在的字符串列表。
                 */
                expect_exist_string: string[];
            };
            expect_non_exist_string: {
                /**
                 * 期待页面中不存在的字符串列表。
                 */
                expect_non_exist_string: string[];
            };
            browser_headers: {
                /**
                 * 自定义Header。结构为`{"key": "somekey", "value":"somevalue"}`
                 */
                browser_headers: any[];
            };
            browser_hosts: {
                /**
                 * 自定义Host。结构为`{"url":"someurl", "ip":"someip"}`。
                 */
                browser_hosts: string[];
            };
            /**
             * 浏览器拨测版本。取值：
             * - 1：单页拨测。
             * - 2：多页拨测。
             * @example `1`
             */
            browser_task_version: string;
            /**
             * 浏览器拨测任务中，页面打开后的额外等待时间。
             * @example `3`
             */
            waitTime_after_completion: number;
            ip_network: string;
            /**
             * 是否允许WebSocket任务不返回消息或返回空消息。取值：
             * - false（默认）：否。
             * - true： 是。
             * @example `false`
             */
            empty_message: boolean;
        };
        /**
         * 探测点类型。默认为PC。
         * 取值：
         * - PC 固网
         * - MOBILE 移动端
         * @example `PC`
         */
        AgentGroup: string;
        /**
         * 自定义探测周期。只能选择周一至周日的某个时间段进行探测。
         */
        CustomSchedule: {
            /**
             * 自定义探测开始时间。
             * 单位：小时。
             * @example `8`
             */
            start_hour: number;
            /**
             * 自定义探测结束时间。
             * 单位：小时。
             * @example `18`
             */
            end_hour: number;
            /**
             * 自定义探测的时区。
             * @example `local`
             */
            time_zone: string;
            days: {
                /**
                 * 探测日。
                 */
                days: number[];
            };
        };
    };
    MetricRules: {
        /**
         * 监控任务的报警规则。
         */
        MetricRule: {
            /**
             * 监控项名称。
             * @example `Availability`
             */
            MetricName: string;
            /**
             * 报警重试次数。
             * @example `3`
             */
            EvaluationCount: string;
            /**
             * 云服务的数据命名空间。
             * @example `acs_networkmonitor`
             */
            Namespace: string;
            /**
             * 收到报警的联系人组。
             * @example `[ "CloudMonitor"]`
             */
            OkActions: string;
            /**
             * 报警规则通知的报警联系组。
             * @example `CloudMonitor`
             */
            AlarmActions: string;
            /**
             * 报警规则ID。
             * @example `bf071ae_7b7aec3817b0fdf****`
             */
            RuleId: string;
            /**
             * 报警规则名称。
             * @example `rule1`
             */
            RuleName: string;
            /**
             * 时间间隔。通常是监控项的上报周期，单位：秒。
             * >如果您设置了统计周期，则会按照此周期查询对应的统计数据 。
             * @example `15s`
             */
            Period: string;
            /**
             * 报警规则的阈值比较符。取值：
             * - `>=`
             * - `>`
             * - `<=`
             * - `<`
             * - `=`
             * - `!=`
             * - GreaterThanYesterday：同比昨天同时间上涨。
             * - LessThanYesterday：同比昨天同时间下降。
             * - GreaterThanLastWeek：同比上周同一时间上涨。
             * - LessThanLastWeek：同比上周同一时间下降。
             * - GreaterThanLastPeriod：环比上周期上涨。
             * - LessThanLastPeriod：环比上周期下降。
             * @example `GreaterThanYesterday`
             */
            ComparisonOperator: string;
            /**
             * 报警规则的表达式。
             * @example `$Availability=30`
             */
            Expression: string;
            /**
             * 报警规则对应的维度。
             * @example `[{"taskId": "cc641dff-c19d-45f3-ad0a-818a0c4f****" }]`
             */
            Dimensions: string;
            /**
             * 报警的状态。取值：
             * - OK：正常。
             * - ALARM：报警。
             * @example `OK`
             */
            StateValue: string;
            /**
             * 报警规则的状态。取值：
             * - true：启用。
             * - false：禁用。
             * @example `true`
             */
            ActionEnable: string;
            /**
             * 报警规则的级别。取值：
             * - 1：紧急。
             * - 2：警告。
             * - 3：信息。
             * @example `2`
             */
            Level: string;
            /**
             * 报警阈值。
             * @example `30`
             */
            Threshold: string;
            /**
             * 报警的统计方法。取值：
             * - Availability：可用探测点百分比。
             * - AvailableNumber：可用探测点数量。
             * - ErrorCodeMaximum：任意状态码（独立报警）。
             * - ErrorCodeMinimum：所有状态码（组合报警）。
             * - Average：响应时间。
             * @example `Availability`
             */
            Statistics: string;
        }[];
    };
}
