export interface DescribeSiteMonitorListResponse {
    /**
     * 请求ID。
     * @example `A80DB41C-AF6C-50E1-ADB5-66DCBA3D266B`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 分页页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页显示记录条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总记录条数。
     * @example `1`
     */
    TotalCount: number;
    SiteMonitors: {
        /**
         * 站点监控任务列表。
         */
        SiteMonitor: {
            /**
             * 站点监控任务探测类型。云监控支持的探测类型包括：HTTP 、PING 、TCP 、UDP 、DNS 、SMTP 、POP3 、FTP。
             * @example `TCP`
             */
            TaskType: string;
            /**
             * 站点监控任务更新时间。
             * @example `2022-03-08 17:14:31`
             */
            UpdateTime: string;
            /**
             * 探测频率。单位：分钟。
             * @example `1`
             */
            Interval: string;
            /**
             * 任务状态。取值：
             * - 1：正常。
             * - 2：禁用。
             * @example `1`
             */
            TaskState: string;
            /**
             * 任务的创建时间。
             * @example `2021-11-01 11:05:18`
             */
            CreateTime: string;
            /**
             * 站点监控任务名称。
             * @example `新的探测任务`
             */
            TaskName: string;
            /**
             * 任务的探测URL地址或IP地址。
             * @example `https://aliyun.com`
             */
            Address: string;
            /**
             * 站点监控任务ID。
             * @example `f5783760-1b39-4b6b-80e8-453d962a****`
             */
            TaskId: string;
            /**
             * 扩展选项。每一种探测类型有不同的扩展类型，详情请参见[CreateSiteMonitor](~~115048~~)。
             */
            OptionsJson: {
                /**
                 * SMTP、POP3或FTP探测类型的密码。
                 * @example `123****`
                 */
                password: string;
                /**
                 * HTTP请求内容格式。取值：
                 * - hex：十六进制格式。
                 * - txt：文本格式。
                 * @example `hex`
                 */
                request_format: string;
                /**
                 * 匹配响应内容。
                 * - 十六进制格式：当请求的内容是字节串，且无法用可见字符表达时，可以将字节串转换为十六进制表示的可见字符串形式。具体转换规则为：一个字节转换成二字节的十六进制字符，例如：1字节（1B）转换成十六进制为`01`， 27字节（27B）转换成十六进制为`1B`。二进制数组（Java形式）为`{(byte)1, (byte)27}`，转换成十六进制为`011b`或`011B`。站点监控对十六进制不区分大小写。将字符串`011B`填入请求内容中，同时请求内容格式选择十六进制格式。
                 * - 文本格式：普通文本指字符串，即由可见字符组成的字符串。
                 * @example `cf0f85`
                 */
                response_content: string;
                /**
                 * 丢包率。
                 * > 该参数仅适用于PING探测类型。
                 * @example `0.5`
                 */
                failure_rate: number;
                /**
                 * 超时时间。单位：毫秒。
                 * @example `3000`
                 */
                time_out: number;
                /**
                 * HTTP请求头。格式为`key1:value1`，通过回车键换行。
                 * @example `testKey:testValue`
                 */
                header: string;
                /**
                 * 发送HTTP请求的Cookie文本。
                 * @example `lang=en`
                 */
                cookie: string;
                /**
                 * TCP、UDP、SMTP或POP3探测类型的端口。
                 * @example `80`
                 */
                port: number;
                /**
                 * PING探测的次数设置。
                 * @example `20`
                 */
                ping_num: number;
                /**
                 * 是否开启安全验证。取值：
                 * - 0：开启。
                 * - 1：关闭。
                 * @example `1`
                 */
                authentication: number;
                /**
                 * HTTP的请求方法。取值：
                 * - get
                 * - post
                 * - head
                 * @example `get`
                 */
                http_method: string;
                /**
                 * 是否包含报警规则。取值：
                 * - 0：包含。
                 * - 1：不包含。
                 * @example `0`
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
                 * HTTP探测请求内容。
                 * @example `cf0f85`
                 */
                request_content: string;
                /**
                 * FTP、SMTP或POP3的用户名。
                 * @example `testUser`
                 */
                username: string;
                /**
                 * HTTP响应内容格式。取值：
                 * - hex：十六进制格式。
                 * - txt：文本格式。
                 * @example `hex`
                 */
                response_format: string;
                /**
                 * DNS解析类型。仅适用于DNS探测类型。取值：
                 * - A（默认值）：指定主机名或域名对应的IP地址。
                 * - CNAME：将多个域名映射到另外一个域名。
                 * - NS：指定域名由某个DNS服务器解析。
                 * - MX：将域名指向一个邮件服务器地址。
                 * - TXT：主机名或域名的说明。文本长度限制512字节，通常用做SPF（Sender Policy Framework）记录，即反垃圾邮件。
                 * - AAAA：将域名解析到IPv6地址的DNS记录。
                 * @example `A`
                 */
                dns_type: string;
                /**
                 * 指定DNS解析服务器的域名或IP地址。
                 * @example `192.168.XX.XX`
                 */
                dns_server: string;
                /**
                 * 是否使用运营商的DNS。
                 * - true（默认值）：使用运营商的DNS。
                 * - false：不使用运营商的DNS。使用默认DNS或指定服务器的DNS。
                 * @example `true`
                 */
                enable_operator_dns: boolean;
                /**
                 * DNS失败后重试次数。
                 * @example `3`
                 */
                attempts: number;
                /**
                 * DNS探测协议类型。取值：
                 * - udp（默认值）
                 * - tcp
                 * - tcp-tls
                 * @example `udp`
                 */
                protocol: string;
                /**
                 * 是否开启ProxyProtocol。取值：
                 * - false（默认值）：不开启ProxyProtocol。
                 * - true：开启ProxyProtocol。
                 * @example `false`
                 */
                proxy_protocol: boolean;
                /**
                 * 可接受的状态码。
                 * > 建议您使用断言配置。
                 * @example `400`
                 */
                acceptable_response_code: string;
                /**
                 * 是否对密码进行base64解码存储。取值：
                 * - true：对密码进行base64解码存储。
                 * - false（默认值）：不对密码进行base64解码存储。
                 * @example `false`
                 */
                isBase64Encode: string;
                /**
                 * 是否验证证书。取值：
                 * - false（默认值）：忽略证书验证。
                 * - true：证书验证。
                 * @example `false`
                 */
                cert_verify: boolean;
                /**
                 * 如果出现301或302状态码，是否跟随再次做重定向探测。取值：
                 * - true：不跟随跳转。
                 * - false（默认值）：跟随跳转。
                 * @example `false`
                 */
                unfollow_redirect: boolean;
                /**
                 * 是否开启任务失败后的自动MTR网络诊断。取值：
                 * - false（默认值）：不开启自动MTR网络诊断。
                 * - true  开启自动MTR网络诊断。
                 * @example `false`
                 */
                diagnosis_mtr: boolean;
                /**
                 * 是否开启探测任务失败后自动Ping网络延时探测。取值：
                 * - false（默认值）：不开启。
                 * - true：开启。
                 * @example `false`
                 */
                diagnosis_ping: boolean;
                /**
                 * 探测失败后重试次数。
                 * @example `1`
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
                         * - 如果断言类型是`body_xml`，则路径为`xml path`。
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
                         * @example `1000`
                         */
                        target: string;
                    }[];
                };
            };
            /**
             * 探针类型。取值：
             * - PC：PC端。
             * - MOBILE：移动端。
             * @example `PC`
             */
            AgentGroup: string;
        }[];
    };
}
