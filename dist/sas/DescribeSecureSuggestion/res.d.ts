export interface DescribeSecureSuggestionResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `676F80E3-4B3F-43DA-9CBB-5FF79F202AA2`
     */
    RequestId: string;
    /**
     * 待加固的安全风险的总条数。
     * @example `15`
     */
    TotalCount: number;
    /**
     * 安全风险处理列表。
     */
    Suggestions: {
        /**
         * 单个扣分项的扣分值。
         * @example `40`
         */
        Points: number;
        /**
         * 待处理的安全风险的类型。取值：
         * - **SS_REINFORCE**：关键功能未配置（例如：恶意主机行为防御）
         * - **SS_ALARM**：待处理告警
         * - **SS_VUL**：待修复漏洞
         * - **SS_HC**：基线问题
         * - **SS_AK**：AK泄露问题
         * - **SS\_CLOUD_HC**：云平台配置风险
         * - **OTHER**：其他
         * @example `SS_ALARM`
         */
        SuggestType: string;
        /**
         * 安全风险处理建议的详情。
         */
        Detail: {
            /**
             * 安全风险待处理项的名称。
             * @example `Website tamper-proofing capability not configured`
             */
            Title: string;
            /**
             * 安全风险处理建议的描述。
             * @example `Malicious tampering of Web pages will affect your normal access to web page content, and may also lead to serious economic losses, brand losses, and even political risks. The webpage tamper-proof service can monitor the website directory in real time and restore the tampered files or directories through backup, so as to ensure that the website information of important systems is not tampered with maliciously and prevent the occurrence of horse hanging, black chain, illegal implantation of terrorist threats, pornography and other content.`
             */
            Description: string;
            /**
             * 安全风险待处理项的类型。取值包含：
             * <props="china">
             * - **ALARM_HIGH**：存在未处理的高危告警事件
             * - **ALARM_MEDIUM**：存在未处理的中危告警事件
             * - **ALARM_LOW**：存在未处理的低危告警事件
             * - **VUL\_EMR_UNCHECK**：存在未检测的应急漏洞
             * - **VUL\_EMR_UNFIX**：存在未修复的应急漏洞
             * - **VUL_WIN**：存在未修复的Windows主机漏洞
             * - **VUL_LINUX**：存在未修复的Linux主机漏洞
             * - **VUL_CMS**：存在未修复的CMS漏洞
             * - **ACCESSKEY_LEAK**：存在AK泄漏风险
             * - **HC_WARN**：存在基线检查风险
             * - **HC\_WEAK\_EXPLOIT_WARN**：存在公网暴露的弱口令风险
             * - **HC\_WEAK\_PASSWORD_WARN**：存在弱口令风险
             * - **HC\_HIGH\_EXPLOIT_WARN**：存在高危可被入侵的风险
             * - **HC\_OTHER_WARN**：存在安全配置风险
             * - **HC\_DATABASE_WARN**：数据库存在安全风险
             * - **CLOUD\_HC\_SAS_OPEN**：服务器未安装安全防护，存在安全风险
             * - **CLOUD\_HC\_AEGIS_OFFLINE**：服务器保护状态为离线
             * - **CLOUD\_HC\_ACCOUNT\_DOUBLE_CHECK**：主账号未开启双因素认证，账号存在安全风险
             * - **CLOUD\_HC_RDS**：RDS-数据库安全策略检查未通过，存在安全风险
             * - **CLOUD\_HC_DDOS**：DDoS高防回源配置检查未通过，存在安全风险
             * - **CLOUD\_HC\_HIGH_LEVEL**：云产品配置存在高危风险
             * - **CLOUD\_HC\_OTHER_LEVEL**：云产品配置存在中低危风险
             * - **OTHER_ATTACH**：存在攻击事件
             * - **OTHER\_DATABASE_ATTACH**：数据库存在安全风险
             * - **REINFORCE_BASELINE**：云平台配置检查
             * - **REINFORCE_SUSPICIOUS**：防病毒功能
             * - **REINFORCE_ANALYSIS**：日志分析
             * - **REINFORCE\_AK_LEAK**：AccessKey泄露情报检测
             * - **REINFORCE\_WEB_LOCK**：未开启网页防篡改功能
             * - **REINFORCE\_BRUTE_FORCE**：防暴力破解
             * - **REINFORCE\_XPRESS_INSTALL**：一键安装客户端
             * - **REINFORCE_RANSOMWARE**：开启防勒索策略
             * - **REINFORCE\_UNI_RANSOMWARE**：数据库防勒索
             * - **REINFORCE\_VIRUS\_SCHEDULE_SCAN**：未开启周期病毒扫描策略
             * - **REINFORCE\_IMAGE\_REPO_SCAN**：未配置容器镜像扫描范围
             * - **REINFORCE\_IMAGE\_SCAN_TASK**：一键扫描容器镜像安全风险
             * - **REINFORCE\_K8S\_LOG_ANALYSIS**：未开启K8s威胁检测
             * - **REINFORCE\_CONTAINER_NETWORK**：容器可视化
             * </props>
             * <props="intl">
             * - **ALARM_HIGH**：Unhandled Urgency Alerts
             * - **ALARM_MEDIUM**：Unhandled Warning Alerts
             * - **ALARM_LOW**：Unhandled Reminder Alerts
             * - **VUL\_EMR_UNCHECK**：Unchecked Urgent Vulnerabilities
             * - **VUL\_EMR_UNFIX**：Unfixed Urgent Vulnerabilities
             * - **VUL_WIN**：Unfixed Windows Server Vulnerabilities
             * - **VUL_LINUX**：Unfixed Linux Server Vulnerabilities
             * - **VUL_CMS**：Unfixed CMS Vulnerabilities
             * - **ACCESSKEY_LEAK**：AccessKey Leakage Risks
             * - **HC_WARN**：Baseline Risks
             * - **HC\_WEAK\_EXPLOIT_WARN**：There is a risk of weak passwords exposed by the public network.
             * - **HC\_WEAK\_PASSWORD_WARN**：Risk of weak password
             * - **HC\_HIGH\_EXPLOIT_WARN**：There is a high risk of invasion
             * - **HC\_OTHER_WARN**：Security Configuration risk
             * - **HC\_DATABASE_WARN**：Database has security risks
             * - **CLOUD\_HC\_SAS_OPEN**：Security protection has not been installed on the server
             * - **CLOUD\_HC\_AEGIS_OFFLINE**：Server protection status is offline
             * - **CLOUD\_HC\_ACCOUNT\_DOUBLE_CHECK**：Two-Factor Authentication not Enabled for Primary Account
             * - **CLOUD\_HC_RDS**：RDS-database security policy failed, security risks
             * - **CLOUD\_HC_DDOS**：Risks in Anti-DDoS Pro Back-to-Origin Settings
             * - **CLOUD\_HC\_HIGH_LEVEL**：Cloud product configuration has high risk
             * - **CLOUD\_HC\_OTHER_LEVEL**：Cloud product configuration has medium and low risk risks
             * - **OTHER_ATTACH**：Attacks
             * - **OTHER\_DATABASE_ATTACH**：Database has security risks
             * - **REINFORCE_BASELINE**：Config Assessment
             * - **REINFORCE_SUSPICIOUS**：Antivirus
             * - **REINFORCE_ANALYSIS**：Log Analysis
             * - **REINFORCE\_AK_LEAK**：AccessKey Leaked Intelligence Detection
             * - **REINFORCE\_WEB_LOCK**：Website tamper-proofing capability not configured
             * - **REINFORCE\_BRUTE_FORCE**：Anti brute force cracking
             * - **REINFORCE\_XPRESS_INSTALL**：One-click client installation
             * - **REINFORCE_RANSOMWARE**：Enable anti-extortion strategy
             * - **REINFORCE\_UNI_RANSOMWARE**：Anti-ransomware for Databases
             * - **REINFORCE\_VIRUS\_SCHEDULE_SCAN**：Periodic virus scan policies not configured
             * - **REINFORCE\_IMAGE\_REPO_SCAN**：No container image scan range configured
             * - **REINFORCE\_IMAGE\_SCAN_TASK**：Image security scan
             * - **REINFORCE\_K8S\_LOG_ANALYSIS**：Container K8s threat detection is disabled
             * - **REINFORCE\_CONTAINER_NETWORK**：Container Visualization
             * </props>
             * @example `REINFORCE_WEB_LOCK`
             */
            SubType: string;
        }[];
    }[];
}
