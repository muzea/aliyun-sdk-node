export interface CreateSyntheticTaskRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 任务名称。如果需要更新已创建的云拨测任务，此处填写已有的任务名称，并设置**UpdateTask**参数为**true**。
     * @example `网络拨测任务`
     */
    "TaskName": string;
    /**
     * 拨测地址。
     * @example `https://www.example.com`
     */
    "Url": string;
    /**
     * 监测点列表。
     */
    "MonitorList": {
        /**
         * 城市ID。
         * @example `1100101`
         */
        CityCode: number;
        /**
         * 运营商ID。
         * @example `18`
         */
        NetServiceId: number;
        /**
         * 运营商类型：
         * - IDC
         * - LastMilie
         * @example `IDC`
         */
        MonitorType: number;
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
    "TaskType": number;
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
     * @example `5`
     */
    "IntervalTime": string;
    /**
     * 监测周期类型：
     * - 0：每天
     * - 1：自定义扩展频率
     * @example `0`
     */
    "IntervalType": string;
    /**
     * 自定义扩展频率。
     */
    "ExtendInterval"?: {
        /**
         * 周期开始时间。格式为`yyyy-MM-dd HH`。
         * @example `2022-07-20 10`
         */
        StartTime: string;
        /**
         * 周期结束时间 。格式为`yyyy-MM-dd HH`。
         * @example `2022-08-20 10`
         */
        EndTime: string;
        /**
         * 拨测执行周期。
         */
        Days: number[];
        /**
         * 当天开始拨测时间的小时数。
         * @example `00`
         */
        StartHour: number;
        /**
         * 当天开始拨测时间的分钟数。
         * @example `00`
         */
        StartMinute: number;
        /**
         * 当天结束拨测时间的小时数。
         * @example `23`
         */
        EndHour: number;
        /**
         * 当天结束拨测时间的分钟数。
         * @example `00`
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
    "IpType": number;
    /**
     * 网络任务。
     */
    "Net"?: {
        /**
         * Ping监测开关。
         * - 0：关。
         * - 1：开，开启后需设置ICMP参数。
         * @example `1`
         */
        NetICMPSwitch: number;
        /**
         * 协议类型：
         * - 0：ICMP
         * - 1：TCP
         * @example `0`
         */
        NetICMPActive: number;
        /**
         * 执行时间间隔。单位为秒。
         * @example `1`
         */
        NetICMPInterval: number;
        /**
         * Package数量。
         * @example `4`
         */
        NetICMPNum: number;
        /**
         * Package大小。
         * @example `32`
         */
        NetICMPSize: number;
        /**
         * DNS监测开关。
         * - 0：关。
         * - 1：开，开启后需设置DNS参数。
         * @example `1`
         */
        NetDNSSwitch: number;
        /**
         * DNS监测超时时间。默认值为5秒，取值范围为0~45秒。
         * @example `5`
         */
        NetDNSTimeout: number;
        /**
         * DNS查询方式：
         * - 1：递归
         * - 2：迭代
         * @example `1`
         */
        NetDNSQueryMethod: number;
        /**
         * 指定NS服务器。
         * @example `114.114.XX.XX`
         */
        NetDNSNs: string;
        /**
         * 是否以dig数据格式展示数据内容。
         * - 0：否
         * - 1：是
         * @example `0`
         */
        NetDigSwitch: number;
        /**
         * DNS服务器类型：
         * - 0：IPv4
         * - 1：IPv6
         * - 2：自动
         * @example `0`
         */
        NetDNSServer: number;
        /**
         * Tracert监测开关。
         * - 0：关。
         * - 1：开，开启后需设置Tracert参数。
         * @example `1`
         */
        NetTraceRouteSwitch: number;
        /**
         * 监测超时，取值范围为0~300秒。
         * @example `60`
         */
        NetTraceRouteTimeout: number;
        /**
         * 最大活跃点数。
         * @example `20`
         */
        NetTraceRouteNum: number;
        /**
         * DNS劫持白名单。填写格式：`域名:匹配规则`。
         * > WAP网络不支持劫持。
         * @example `www.aliyun.com:202.0.3.55|203.3.44.67`
         */
        WhiteList: string;
        /**
         * 监测超时取值范围。
         * @example `20`
         */
        NetICMPTimeout: number;
        /**
         * 切分Package开关。
         * - 0：关
         * - 1：开
         * @example `0`
         */
        NetICMPDataCut: number;
    };
    /**
     * 公共参数。
     */
    "CommonParam"?: {
        /**
         * 是否创建报警：
         * - 1：创建报警
         * - 0：不创建报警
         * @example `1`
         */
        AlarmFlag: string;
        /**
         * 告警参数。
         */
        AlertList: {
            /**
             * 告警规则名称。
             * 网络拨测：
             * - 时延：PING_SET
             * - 丢包率：PING_LOST_RATE
             * - 劫持：HIJACKPER
             * @example `PING_SET`
             */
            Name: string;
            /**
             * 是否是必要条件。
             * @example `true`
             */
            IsCritical: number;
            /**
             * 条件判断：
             * - 1：大于
             * - 0：小于
             * @example `1`
             */
            Symbols: number;
        }[];
        /**
         * 通知策略ID。
         * @example `1234`
         */
        AlertPolicyId: string;
        /**
         * 告警联系人ID，多个联系人之间通过半角逗号（,）分隔。
         * @example `123`
         */
        AlertNotifierId: string;
        /**
         * 起始执行时间。
         * @example `2022-07-20 10`
         */
        StartExecutionTime: number;
        /**
         * 是否均匀分配监测样本 ：
         * - 0：否
         * - 1：是
         * @example `0`
         */
        MonitorSamples: number;
    };
    /**
     * 浏览任务监测关联项。
     */
    "Navigation"?: {
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
         * @example `2`
         */
        NavReturnElement: number;
        /**
         * 当出现重定向后，是否要继续浏览。
         * - 1：是
         * - 0：否
         * @example `1`
         */
        NavRedirection: number;
        /**
         * 通过Accept-Encoding字段判断是否接受压缩文件。
         * - 1：禁用
         * - 0：不禁用
         * @example `1`
         */
        NavDisableCompression: string;
        /**
         * 是否支持自动滚动屏幕，加载页面。
         * - 1：是
         * - 0：否
         * @example `1`
         */
        NavAutomaticScrolling: string;
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
         * 是否执行Applet。
         * - 1：执行
         * - 0：不执行
         * > 仅IE全元素支持此参数。
         * @example `1`
         */
        ExecuteApplication: number;
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
         * 设置QUIC版本。
         * - 0（默认）
         * - 35
         * - 39
         * - 43
         * - 44
         * > 仅Chrome全元素支持此参数。
         * @example `0`
         */
        QUICVersion: number;
        /**
         * 输入QUIC请求元素域名。
         * > 仅Chrome全元素支持此参数。
         * @example `www.example.com`
         */
        QUICDomain: string;
        /**
         * 是否返回请求头。
         * - 0：不返回
         * - 1：返回基础文档Header
         * - 2：返回所有Header
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
         * @example `ipv4:192.168.2.1,192.168.2.5:img.a.com|192.168.2.1[8080]:img.a.com`
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
         * 自定义Header格式。可以填写多个字段，多个字段以竖线（|）隔开。
         * @example `Host:www.example.com|Referer:www.example.com`
         */
        NavCustomHeaderContent: string;
        /**
         * 元素黑名单。
         * @example `*.a.com`
         */
        ElementBlacklist: string;
        /**
         * 进程标识。
         * @example `ssh`
         */
        ProcessName: string;
        /**
         * 验证字符串黑名单。截取页面代码中所包含的一段字符串，若检测样本中不包含则报错，支持正则表达配置格式【Regex:验证内容】，字符串黑名单多以"|"隔开。
         * @example `Regex:*.example|expalme|`
         */
        VerifyStringBlacklist: string;
        /**
         * 验证字符串白名单。截取页面代码中所包含的一段字符串，若检测样本中不包含则报错，支持正则表达配置格式【Regex:验证内容】，字符串白名单多以"|"隔开。
         * @example `Regex:*.example|expalme|`
         */
        VerifyStringWhiteList: string;
        /**
         * 监测超时，单位为秒。
         * @example `20`
         */
        MonitorTimeout: string;
        /**
         * 等待完成时间，单位为秒。
         * @example `15`
         */
        WaitCompletionTime: number;
        /**
         * 慢元素阈值，单位为秒。
         * @example `5`
         */
        SlowElementThreshold: number;
        /**
         * DNS劫持白名单。填写格式：域名:匹配规则。
         * @example `www.aliyun.com:202.0.3.55|203.3.44.67`
         */
        DNSHijackWhiteList: string;
        /**
         * 页面篡改。填写规则：冒号前部分为要判断的域名，冒号后部分为匹配规则；匹配规则支持确切IP\ip通配符\子网掩码\cname，多个以竖线分割。
         * @example `www.example.com:202.0.3.55|203.3.44.67`
         */
        PageTamper: string;
        /**
         * 识别元素。
         * @example `50`
         */
        FlowHijackJumpTimes: number;
        /**
         * 劫持标识。劫持判断关键字或关键元素，可以带星号（*）。
         * @example `test`
         */
        FlowHijackLogo: string;
        /**
         * 返回响应头。
         * - 0：不返回
         * - 1：返回基础文档Header
         * - 2：返回所有Header
         * @example `0`
         */
        ResponseHeader: number;
    };
    /**
     * 文件下载任务。
     */
    "Download"?: {
        /**
         * 传输大小，单位为KB。
         * @example `10240`
         */
        DownloadTransmissionSize: number;
        /**
         * 自定义Host。
         * - 1：轮循
         * - 0：随机
         * @example `1`
         */
        DownloadCustomHost: number;
        /**
         * 自定义Host IP。可以填写多个IP，每个IP用半角逗号（,）分隔。
         * @example `ipv4:192.168.2.1,192.168.2.5:img.a.com|192.168.2.1[8080]:img.a.com`
         */
        DownloadCustomHostIp: string;
        /**
         * DNS劫持白名单。
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
         * @example `30`
         */
        MonitorTimeout: number;
        /**
         * 连接超时。
         * @example `200`
         */
        ConnectionTimeout: number;
        /**
         * 验证方式。
         * - 0：不验证
         * - 1：验证字符串
         * - 2：MD5验证
         * @example `0`
         */
        VerifyWay: number;
        /**
         * 验证关键词。截取响应头中所包含的一段字符串，若监测样本中不包含则报错。
         * @example `keyword`
         */
        ValidateKeywords: string;
        /**
         * 是否支持重定向。
         * @example `0`
         */
        DownloadRedirection: number;
        /**
         * 自定义Header格式。可以填写多个字段，多个字段以竖线（|）隔开。
         * @example `Host:www.example.com|Referer:www.example.com`
         */
        DownloadCustomHeaderContent: string;
        /**
         * 证书错误忽略内容。将复选框的值用竖线（|）拼接传递。复选框的值支持1:忽略证书状态错误;2:忽略证书不可信错误;4:忽略无效主机名错误。
         * @example `1|2|4`
         */
        DownloadIgnoreCertificateError: string;
    };
    /**
     * API性能任务。
     */
    "Protocol"?: {
        /**
         * 请求内容，包含Header和Body。
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
             * 自定义发起API性能拨测时的请求Header。
             */
            Header: {
                /**
                 * Header的Key。
                 * @example `regionId`
                 */
                Key: string;
                /**
                 * Header的Value。
                 * @example `cn-hangzhou`
                 */
                Value: string;
            }[];
            /**
             * 自定义发起API性能拨测时的请求Body。
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
                 * **Mode**设置为**form-data**时传入的数据内容。
                 */
                FormData: {
                    /**
                     * **form-data**的Key。
                     * @example `appId`
                     */
                    Key: string;
                    /**
                     * **form-data**的Value。
                     * @example `3425`
                     */
                    Value: string;
                }[];
                /**
                 * **Mode**设置为**x-www-form-urlencoded**时传入的数据内容。
                 */
                UrlEncoding: {
                    /**
                     * **x-www-form-urlencoded**的Key。
                     * @example `appId`
                     */
                    Key: string;
                    /**
                     * **x-www-form-urlencoded**的Value。
                     * @example `11080`
                     */
                    Value: string;
                }[];
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
                 * @example `json`
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
         * @example `"code":200`
         */
        VerifyContent: string;
        /**
         * 接收数据大小。验证响应内容选择**部分包含**时填写。
         * @example `500`
         */
        ReceivedDataSize: number;
        /**
         * 监测超时时间，单位为秒。
         * @example `30`
         */
        ProtocolMonitorTimeout: string;
        /**
         * 自定义Host。
         * - 1：轮循
         * - 0：随机
         * @example `1`
         */
        CustomHost: number;
        /**
         * 自定义Host IP。可以填写多个IP，每个IP用半角逗号（,）分隔。
         * @example `ipv4:192.168.2.1,192.168.2.5:img.a.com|192.168.2.1[8080]:img.a.com`
         */
        CustomHostIp: string;
        /**
         * 协议连接超时时间，单位为秒。
         * @example `3`
         */
        ProtocolConnectionTime: number;
    };
    /**
     * 是否更新已有云拨测任务。
     * - true：更新任务。
     * - false：新建任务。
     * @example `false`
     */
    "UpdateTask"?: boolean;
}
