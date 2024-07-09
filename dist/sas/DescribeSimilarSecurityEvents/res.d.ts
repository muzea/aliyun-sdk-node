export interface DescribeSimilarSecurityEventsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9F4217C8-763F-51EF-84D4-5535E072B2D8`
     */
    RequestId: string;
    /**
     * 查询结果页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的告警事件的数量。默认值为**20**，表示每页显示20条告警事件。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的告警事件的总数量。
         * @example `5`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据总数量。
         * @example `5`
         */
        Count: number;
    };
    /**
     * 相同告警事件的列表信息。
     */
    SecurityEventsResponse: {
        /**
         * 告警最新发生的时间戳，单位为毫秒。
         * @example `1648544361480`
         */
        LastTime: number;
        /**
         * 受告警事件影响的服务器的UUID。
         * @example `qweeqq-13232-daweq-w****`
         */
        Uuid: string;
        /**
         * 告警事件的名称。
         * @example `Trojan`
         */
        EventName: string;
        /**
         * 告警类型。取值：
         * <props="china">
         * - 进程异常行为
         * - 网站后门
         * - 异常登录
         * - 异常事件
         * - 敏感文件篡改
         * - 恶意进程（云查杀）
         * - 异常网络连接
         * - 其他
         * - 异常账号
         * - 应用入侵事件
         * - 云产品威胁检测
         * - 精准防御
         * - 应用白名单
         * - 持久化后门
         * - Web应用威胁检测
         * - 恶意脚本
         * - 威胁情报
         * - 恶意网络行为
         * - 容器集群异常
         * - 网站后门（本地查杀）
         * - 漏洞利用
         * - 恶意进程（本地查杀）
         * - 可信异常
         * </props>
         * <props="intl">
         * - Suspicious Process
         * - Webshell
         * - Unusual Logon
         * - Malicious Software
         * - Sensitive File Tampering
         * - Unusual Network Connection
         * - Other
         * - Suspicious Account
         * - Cloud threat detection
         * - Precision defense
         * - Application Whitelist
         * - Persistence
         * - Web Application Threat Detection
         * - Malicious scripts
         * - Malicious Network Activity
         * - K8s Abnormal Behavior
         * - Website backdoor (local engine)
         * - Exploit
         * - Image Scan
         * - Trusted exception
         * </props>
         * 关于告警类型的详细介绍信息，请参见[安全告警检测项](~~68388~~)。
         * @example `Malicious Software`
         */
        EventType: string;
        /**
         * 告警事件的ID。
         * @example `158661`
         */
        SecurityEventId: number;
        /**
         * 告警事件首次发生时间戳，单位为毫秒。
         * @example `1648457961000`
         */
        OccurrenceTime: number;
    }[];
}
