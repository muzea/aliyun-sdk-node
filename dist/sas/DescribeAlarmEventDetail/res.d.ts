export interface DescribeAlarmEventDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7EA50837-2F0B-5BCC-AB61-4968D88D75AD`
     */
    RequestId: string;
    /**
     *
     * 告警事件的详情。
     */
    Data: {
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
         * @example `Webshell`
         */
        Type: string;
        /**
         * 关联实例的公网IP。
         * @example `172.16.XX.XX`
         */
        InternetIp: string;
        /**
         * k8s集群名称。
         * @example `TestK8sCluser`
         */
        K8sClusterName: string;
        /**
         * 容器镜像ID。
         * @example `cadb7a725641`
         */
        ContainerImageId: string;
        /**
         * 告警事件描述。
         * @example `The detection model finds that self-mutation is running on your server. A self-mutation Trojan is a Trojan horse program with self-mutation function. It will change its hash or copy a large number of itself to different paths, and run in the background to avoid cleaning.`
         */
        AlarmEventDesc: string;
        /**
         * 告警事件的唯一标识。
         * > 查询警事件的详细信息，需要提供告警事件的唯一标识信息，该标识信息可调用[DescribeSuspEvents](~~DescribeSuspEvents~~)接口获取。
         * @example `9f62555666f177aa84ee1eaf465a****`
         */
        AlarmUniqueInfo: string;
        /**
         * 能否取消告警。取值：
         * - **true**：可以取消标记为误报。
         * - **false**：不能取消标记为误报。
         * @example `false`
         */
        CanCancelFault: boolean;
        /**
         * 容器应用名称。
         * @example `app:msdp-uat-service`
         */
        AppName: string;
        /**
         * 能否在线处理。取值：
         * - **true**：可以取消标记为误报。
         * - **false**：不能取消标记为误报。
         * @example `false`
         */
        CanBeDealOnLine: boolean;
        /**
         * 容器镜像名称。
         * @example `jenkins/jenkins:latest`
         */
        ContainerImageName: string;
        /**
         * K8s集群ID。
         * @example `c562cf0d68e9749ee9fe544a7ab2f****`
         */
        K8sClusterId: string;
        /**
         * 是否是重大活动安全保障模式。
         * @example `true`
         */
        ContainHwMode: boolean;
        /**
         * 实例名称。
         * @example `i-wz92q7m5hsbgfhdss***`
         */
        InstanceName: string;
        /**
         * k8s节点ID。
         * @example `i-bp14a1ay8e0aa9t0l***`
         */
        K8sNodeId: string;
        /**
         * 告警事件的处理方法。
         * @example `An invalid logon source IP has been detected. If you recognize this logon attempt, we recommend that you add the current logon source IP to the valid logon source IP list to avoid future alerts. If you do not recognize this logon attempt, we recommend that you modify the password.`
         */
        Solution: string;
        /**
         * 告警事件的数据来源。
         * @example `aegis_***`
         */
        DataSource: string;
        /**
         * 关联实例的私网IP。
         * @example `172.25.30.**`
         */
        IntranetIp: string;
        /**
         * 告警事件名称。
         * @example `Login with unusual location`
         */
        AlarmEventAliasName: string;
        /**
         * 告警事件结束的时间戳，单位为毫秒。
         * @example `1542366542000`
         */
        EndTime: number;
        /**
         * 资产实例的UUID。
         * @example `6690a46c-0edb-4663-a641-3629d1a9****`
         */
        Uuid: string;
        /**
         * 告警事件的开始的时间戳，单位为毫秒。
         * @example `1542378601000`
         */
        StartTime: number;
        /**
         * 容器应用ID。
         * @example `container_1606995441910_394868_01_000***`
         */
        ContainerId: string;
        /**
         * k8sPod名称。
         * @example `myapp-pod`
         */
        K8sPodName: string;
        /**
         * K8s命名空间。
         * @example `sit-saic-trip`
         */
        K8sNamespace: string;
        /**
         * k8s节点名称。
         * @example `cn-hangzhou.10.188.139.**`
         */
        K8sNodeName: string;
        /**
         * 告警事件的危险等级。取值：
         * - **serious**：紧急。
         * - **suspicious**：可疑。
         * - **remind**：提醒。
         * @example `serious`
         */
        Level: string;
        /**
         * 告警事件发生的原因（溯源信息）。
         */
        CauseDetails: {
            /**
             * 告警事件溯源的key。
             * @example `842e314e69b1a2c45d5c1a2f88a16***`
             */
            Key: string;
            /**
             * 告警事件溯源的value。
             */
            Value: {
                /**
                 * 溯源信息字段的展示类型。取值：
                 * - **text**：文本方式。
                 * - **html**：富文本方式。
                 * @example `html`
                 */
                Type: string;
                /**
                 * 溯源信息字段的值。
                 * @example `<p>under a certain small probability, yundun may mistakenly judge the repeated attempts caused by the administrator forgetting or entering the wrong password as successful blasting. Please check according to the account number and time shown in the alarm details. Once it is confirmed that it is not the initiative of the administrator, it is recommended to immediately block the IP, and you can open it at the same time<a href="https://yundun.console.aliyun.com/?p=pam">PAM</a>, hosting host login password, improving remote connection efficiency and security control ability, and according to<a href="https://click.aliyun.com/m/1000226086/">best practice of ECS account security protection</a>Modify login password and convergence asset.</p>↵`
                 */
                Value: string;
                /**
                 * 溯源信息字段的名称。
                 * @example `sshd`
                 */
                Name: string;
            }[];
        }[];
    };
}
