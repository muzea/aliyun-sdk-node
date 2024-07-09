export interface GetSyntheticTaskDetailResponse {
    /**
     * 请求ID。
     * @example `4D6C358A-A58B-4F4B-94CE-F5AAF023****`
     */
    RequestId: string;
    /**
     * 任务详情。
     */
    TaskDetail: {
        /**
         * 云拨测任务ID。
         * @example `19584`
         */
        TaskId: number;
        /**
         * 任务名称。
         * @example `net-test`
         */
        TaskName: string;
        /**
         * 拨测地址。
         * @example `www.example.com`
         */
        Url: string;
        /**
         * 检测点列表
         */
        MonitorList: {
            /**
             * 城市编码。
             * @example `11011XX`
             */
            CityCode: number;
            /**
             * 网络服务ID。
             * @example `12`
             */
            NetServiceId: number;
            /**
             * 监测点类型。
             * @example `1`
             */
            MonitorType: number;
            /**
             * 发送次数。
             * @example `2`
             */
            SendCount: number;
        }[];
        /**
         * 任务类型：
         * 1. 3：网页性能-IE
         * 2. 34：网页性能-Chrome
         * 3. 0：网络质量
         * 4. 40：文件下载
         * 5. 7：API性能
         * @example `0`
         */
        TaskType: number;
        /**
         * 拨测频率，单位为分钟。可选频率如下：
         * - 1
         * - 5
         * - 10
         * - 15
         * - 20
         * - 30
         * - 60
         * - 120
         * - 180
         * - 240
         * - 360
         * - 480
         * - 720
         * - 1440
         * @example `20`
         */
        IntervalTime: number;
        /**
         * 监测周期类型：
         * - 0：每天
         * - 1：自定义扩展频率
         * @example `0`
         */
        IntervalType: number;
        /**
         * 自定义扩展频率。
         */
        ExtendInterval: {
            /**
             * 周期开始时间，格式yyyy-MM-dd HH
             * @example `2022-02-26 11:40`
             */
            StartTime: string;
            /**
             * 周期结束时间 。格式为`yyyy-MM-dd HH`。
             * @example `2022-05-03 11:40`
             */
            EndTime: string;
            /**
             * 拨测执行周期。
             * - -1：每天
             * - 0：周日
             * - 1：周一
             * - 2：周二
             * - 3：周三
             * - 4：周四
             * - 5：周五
             * - 6：周六
             */
            Days: number[];
            /**
             * 当天开始拨测时间的小时数。
             * @example `9`
             */
            StartHour: number;
            /**
             * 当天开始拨测时间的分钟数。
             * @example `20`
             */
            StartMinute: number;
            /**
             * 当天结束小时数。
             * @example `12`
             */
            Endhour: number;
            /**
             * 当天结束分钟数。
             * @example `20`
             */
            EndMinute: number;
        };
        /**
         * IP类型：
         * - 0：自动
         * - 1：IPv4
         * - 2：IPpv6
         * @example `0`
         */
        IpType: number;
        /**
         * 文件下载任务。
         */
        Download: {
            /**
             * 传输大小，单位为KB。
             * @example `20`
             */
            DownloadTransmissionSize: number;
            /**
             * 自定义Host。
             * - 1：轮循
             * - 0：随机
             * @example `0`
             */
            DownloadCustomHost: number;
            /**
             * 自定义Host IP。可以填写多个IP，每个IP用半角逗号（,）分隔。
             * @example `168.23.45.1`
             */
            DownloadCustomHostIp: string;
            /**
             * DNS劫持白名单。填写格式：`域名:匹配规则`。
             * > WAP网络不支持劫持。
             * @example `[{\"src\":\"211.154.166.174\"}]`
             */
            WhiteList: string;
            /**
             * 下载内核。
             * - 1：curl
             * - 0：WinInet
             * @example `1`
             */
            DownloadKernel: number;
            /**
             * Quick协议
             * - 1：http1
             * - 2：http2
             * - 3：http3
             * @example `1`
             */
            QuickProtocol: string;
            /**
             * 监测时长。
             * @example `12`
             */
            MonitorTimeout: number;
            /**
             * 下载任务超时时间
             * @example `200`
             */
            ConnectionTimeout: number;
            /**
             * 验证响应内容。
             * - 0：不验证
             * - 1：字符串完全匹配
             * - 2：字符串部分包含
             * - 3：MD5验证
             * @example `0`
             */
            VerifyWay: number;
            /**
             * 验证关键词。
             * @example `test`
             */
            ValidateKeywords: string;
            /**
             * 是否支持重定向。
             * @example `1`
             */
            DownloadRedirect: number;
            /**
             * 证书错误忽略内容。将复选框的值用竖线‘｜’拼接传递。
             * @example `char`
             */
            DownloadCustomHeaderContent: string;
        };
        /**
         * 网络任务。
         */
        Net: {
            /**
             * Ping监测开关。
             * - 0：关
             * - 1：开，当设置为1时还需设置Icmp参数。
             * @example `0`
             */
            NetIcmpSwitch: number;
            /**
             * 协议类型
             * - 0 : ICMP
             * - 1 : TCP
             * @example `0`
             */
            NetIcmpActive: number;
            /**
             * 监测超时时间。
             * @example `20`
             */
            NetIcmpTimeout: number;
            /**
             * 拨测任务执行间隔。
             * @example `10`
             */
            NetIcmpInterval: number;
            /**
             * Package数量。
             * @example `10`
             */
            NetIcmpNum: number;
            /**
             * Package大小。
             * @example `30`
             */
            NetIcmpSize: number;
            /**
             * 切分package开关，取值：
             * - 0: 关
             * - 1: 开
             * @example `0`
             */
            NetIcmpDataCut: number;
            /**
             * DNS查询方式，取值：
             * - 1: 递归
             * - 2: 迭代
             * @example `1`
             */
            NetDnsQueryMethod: string;
            /**
             * DNS监测开关，取值：
             * - 0: 关
             * - 1: 开
             * @example `0`
             */
            NetDnsSwitch: number;
            /**
             * Tracert监测开关。
             * - 0：关。
             * - 1：开，开启后需设置Tracert参数。
             * @example `0`
             */
            NetTraceRouteSwitch: number;
            /**
             * 监测超时，取值范围为0~300秒。
             * @example `20`
             */
            NetTraceRouteTimeout: number;
            /**
             * 最大活跃点数。
             * @example `30`
             */
            NetTraceRouteNum: number;
            /**
             * DNS劫持白名单。填写格式：`域名:匹配规则`。
             * > WAP网络不支持劫持。
             * @example `119.119.53.156/32`
             */
            WhiteList: string;
            /**
             * 指定NS服务器。
             * @example `189.12.32.124`
             */
            NetDnsNs: string;
            /**
             * 是否以dig数据格式展示数据内容。
             * - 0：否
             * - 1：是
             * @example `0`
             */
            NetDigSwitch: number;
            /**
             * DNS服务器类型，取值：
             * - 0: ipv4
             * - 1: ipv6
             * - 2: 自动
             * @example `0`
             */
            NetDnsServer: number;
            /**
             * 网络DNS超时时间。
             * @example `10`
             */
            NetDnsTimeout: string;
        };
        /**
         * 浏览任务。
         */
        Nav: {
            /**
             * 是否禁用缓存。
             * - 1：禁用
             * - 0：不禁用
             * @example `1`
             */
            NavDisableCache: number;
            /**
             * 是否返回页面的元素。
             * - 1：否，返回基础文档数据。
             * - 2：是，返回所有文档数据。
             * @example `1`
             */
            NavReturnElement: number;
            /**
             * 重定向，取值：
             * - 0: 否
             * - 1: 是
             * @example `1`
             */
            NavRedirect: number;
            /**
             * 禁用压缩，取值：
             * - 0: 不禁用
             * - 1: 禁用
             * @example `0`
             */
            NavDisableCompression: number;
            /**
             * 是否支持自动滚动屏幕，加载页面。
             * - 1：是
             * - 0：否
             * @example `1`
             */
            NavAutomaticScrolling: number;
            /**
             * 是否忽略在SSL握手中证书校验过程中的证书错误而继续浏览。
             * - 1：忽略
             * - 0：不忽略
             * @example `1`
             */
            NavIgnoreCertificateError: number;
            /**
             * 是否过滤非有效IP。
             * - 1：不过滤
             * - 0：过滤
             * @example `1`
             */
            FilterInvalidIP: number;
            /**
             * 执行Applet，取值：
             * - 0: 不执行
             * - 1: 执行
             * @example `1`
             */
            ExecuteApplet: number;
            /**
             * 是否执行ActiveX。
             * - 3：执行
             * - 0：不执行
             * > 仅IE全元素支持此参数。
             * @example `3`
             */
            ExecuteActiveX: number;
            /**
             * 是否执行脚本。
             * - 1：执行
             * - 0：不执行
             * > 仅IE全元素支持此参数。
             * @example `1`
             */
            ExecuteScript: number;
            /**
             * quic版本，默认0。
             * - 35：35
             * - 39: 39
             * - 43: 43
             * - 44: 44
             * > 仅Chrome全元素支持此参数。
             * @example `0`
             */
            QuicVersion: number;
            /**
             * quic请求元素域名。
             * @example `www.example.com`
             */
            QuicDomain: string;
            /**
             * 返回请求头。
             * - 0：不返回
             * - 1：返回基础文档Header
             * - 2：返回所有的Header
             * @example `0`
             */
            RequestHeader: number;
            /**
             * 选择自定义Host模式。
             * - 1：轮循
             * - 0：随机
             * @example `1`
             */
            NavCustomHost: number;
            /**
             * 自定义Host IP。可以填写多个IP，每个IP用半角逗号（,）分隔。
             * @example `119.119.53.156/32`
             */
            NavCustomHostIp: string;
            /**
             * 自定义header。
             * - 0：关
             * - 1：修改第一包
             * - 2：修改全部包
             * @example `0`
             */
            NavCustomHeader: string;
            /**
             * 自定义Header格式。可以填写多个字段，多个字段以竖线（）隔开。
             * @example `content`
             */
            NavCustomHeaderContent: string;
            /**
             * 元素黑名单。
             * @example `test`
             */
            ElementBlacklist: string;
            /**
             * 进程标识。
             * @example `ssh`
             */
            ProcessName: string;
            /**
             * 验证字符串黑名单。
             * @example `test`
             */
            VerifyStringBlacklist: string;
            /**
             * 验证字符串白名单。
             * @example `test`
             */
            VerifyStringWhitelist: string;
            /**
             * 监控超时时间。
             * @example `20`
             */
            MonitorTimeout: number;
            /**
             * 等待完成时间。
             * @example `20`
             */
            WaitCompletionTime: number;
            /**
             * 慢元素阈值，单位为秒。
             * @example `30`
             */
            SlowElementThreshold: number;
            /**
             * dns白名单列表。
             * @example `119.119.53.156`
             */
            DnsHijackWhitelist: string;
            /**
             * 页面篡改。
             * @example `content`
             */
            PageTampering: string;
            /**
             * 识别元素。
             * @example `12`
             */
            FlowHijackJumpTimes: number;
            /**
             * 劫持标识。
             * @example `target`
             */
            FlowHijackLogo: string;
        };
        /**
         * API性能类型的拨测任务。
         */
        Protocol: {
            /**
             * 请求内容（包含Header、Body）。
             */
            RequestContent: {
                /**
                 * 请求方法。
                 * - POST
                 * - GET
                 * @example `POST`
                 */
                Method: string;
                /**
                 * 请求头。
                 */
                Header: {
                    /**
                     * 请求参数中header的key
                     * @example `regionId`
                     */
                    Key: string;
                    /**
                     * 请求参数中header的值
                     * @example `cn-hangzhou`
                     */
                    Value: string;
                }[];
                /**
                 * 请求body内容
                 */
                Body: {
                    /**
                     * 内容类型。
                     * - form-data
                     * - x-www-form-urlencoded
                     * - raw
                     * @example `form-data`
                     */
                    Mode: string;
                    /**
                     * mode=form-data时传入的数据内容。
                     */
                    Formdata: {
                        /**
                         * **form-data**的Key。
                         * @example `appId`
                         */
                        Key: string;
                        /**
                         * form-data的value。
                         * @example `3425`
                         */
                        Value: string;
                    };
                    /**
                     * Body内容的URLl地址.
                     */
                    Urlencoded: {
                        /**
                         * Tag的键。
                         * @example `appId`
                         */
                        Key: string;
                        /**
                         * Tag的值。
                         * @example `11080`
                         */
                        Value: string;
                    };
                    /**
                     * **Mode**设置为**raw**时传入的数据内容。
                     * @example `content`
                     */
                    Raw: string;
                    /**
                     * Mode设置为raw时选择的语言。
                     * - json
                     * - xml
                     * - javascript
                     * - html
                     * - text
                     * @example `xml`
                     */
                    Language: string;
                };
            };
            /**
             * 字符编码。
             * - 0：utf-8
             * - 1：gbk
             * - 2：gb2312
             * - 3：unicode
             * @example `0`
             */
            CharacterEncoding: number;
            /**
             * 验证响应内容。
             * - 0：不验证
             * - 1：字符串完全匹配
             * - 2：字符串部分包含
             * - 3：MD5验证
             * @example `0`
             */
            VerifyWay: number;
            /**
             * 验证内容。
             * @example `list`
             */
            VerifyContent: string;
            /**
             * 接收数据大小。验证响应内容选择**部分包含**时填写。
             * @example `30`
             */
            ReceivedDataSize: number;
            /**
             * 监测超时时间，单位为秒。
             * @example `30`
             */
            ProtocolMonitorTimeout: number;
            /**
             * 超时时间
             * @example `20`
             */
            ProtocolConnectionTimeout: number;
            /**
             * 自定义Host。
             * - 1：轮循
             * - 0：随机
             * @example `1`
             */
            CustomHost: number;
            /**
             * 自定义Host IP。可以填写多个IP，每个IP用半角逗号（,）分隔。
             * @example `119.119.53.156`
             */
            CustomHostIp: string;
        };
        /**
         * 监测点列表字符串。
         * @example `12`
         */
        MonitorListString: string;
        /**
         * 通用参数列表。
         */
        CommonParam: {
            /**
             * 告警标识符。
             * @example `1`
             */
            AlarmFlag: number;
            /**
             * 报警策略ID。
             * @example `1`
             */
            AlertPolicyId: string;
            /**
             * 报警标识符ID。
             * @example `1`
             */
            AlertNotifierId: string;
            /**
             * 开始执行时间。
             * @example `1664427128`
             */
            StartExecutionTime: string;
            /**
             * 监测样本。
             * @example `1`
             */
            MonitorSamples: string;
            /**
             * 报警列表。
             */
            AlertList: {
                /**
                 * 报警名称。
                 * @example `alert-test`
                 */
                Name: string;
                /**
                 * 普通报警。
                 * @example `1`
                 */
                GeneralAlert: string;
                /**
                 * 严重报警。
                 * @example `1`
                 */
                SeriousAlert: string;
                /**
                 * 是否是必要条件。
                 * @example `0`
                 */
                IsCritical: string;
                /**
                 * 大于或小于。
                 * @example `1`
                 */
                Symbols: string;
            }[];
        };
    };
}
