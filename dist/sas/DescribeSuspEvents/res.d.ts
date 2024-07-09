export interface DescribeSuspEventsResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 分页查询时，每页数据显示的最大条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 本次请求的ID。
     * @example `0D6E20E4-8326-1D03-A553-2182BE9E82F9`
     */
    RequestId: string;
    /**
     * 告警事件的总数量。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 分页查询时，当前页显示的数据条数。
     * @example `20`
     */
    Count: number;
    /**
     * 告警事件信息。
     */
    SuspEvents: {
        /**
         * 攻击阶段。
         * @example `"["authority_maintenance"]"`
         */
        Stages: string;
        /**
         * 攻击阶段展示名。
         */
        TacticItems: {
            /**
             * ATT&CK攻击阶段信息。
             * @example `TA0001`
             */
            TacticId: string;
            /**
             * ATT&CK的战术名称。
             * @example `Malicious scripts-Malicious script code execution`
             */
            TacticDisplayName: string;
        }[];
        /**
         * 关联实例的公网IP。
         * @example `1.2.XX.XX`
         */
        InternetIp: string;
        /**
         * K8s集群名称。
         * @example `test-daily`
         */
        K8sClusterName: string;
        /**
         * 容器镜像ID。
         * @example `sha256:2e5a3b0ae5f452b3cb458789a9a7542ef40035a84318469a8528c5e444db1****`
         */
        ContainerImageId: string;
        /**
         * 最后一次发生的时间戳，单位为毫秒。
         * @example `1631699497000`
         */
        LastTimeStamp: number;
        /**
         * 告警事件首次发生的时间。
         * @example `2018-09-26 01:51:01`
         */
        OccurrenceTime: string;
        /**
         * 告警事件的唯一标识ID。
         * @example `8df914418f****`
         */
        AlarmUniqueInfo: string;
        /**
         * 告警事件的影响概况描述。
         * @example `webshell`
         */
        Desc: string;
        /**
         * 能否取消标记为误报。取值：
         * - **true**：可以取消
         * - **false**：不能取消
         * @example `false`
         */
        CanCancelFault: boolean;
        /**
         * 告警名称。
         * @example `Login with unusual location`
         */
        AlarmEventNameDisplay: string;
        /**
         * 告警事件所属应用的名称。
         * @example `pro-deploy-tibasic`
         */
        AppName: string;
        /**
         * 告警事件关联的告警事件的ID。
         * @example `270789`
         */
        SecurityEventIds: string;
        /**
         * K8s集群ID。
         * @example `c517b37e1401e4961b3951863a49a****`
         */
        K8sClusterId: string;
        /**
         * 容器镜像名称。
         * @example `centos7_apache:v1.0.1`
         */
        ContainerImageName: string;
        /**
         * 高级加白规则。
         * @example `[{\"uuid\":\"ALL\",\"field\":\"gmtModified\",\"operate\":\"contains\",\"fieldValue\":\"222\"}]`
         */
        MarkMisRules: string;
        /**
         * 是否支持在线处理告警事件，例如隔离。取值包括：
         * - **true**：支持在线处理
         * - **false**：不支持在线处理
         * @example `true`
         */
        CanBeDealOnLine: boolean;
        /**
         * 是否为服务器开启了重保护模式。取值：
         * - **true**：已开启。
         * - **false**：未开启。
         * @example `false`
         */
        ContainHwMode: boolean;
        /**
         * K8s节点ID。
         * @example `i-bp14a1ay8e0aa9t0****
        `
         */
        K8sNodeId: string;
        /**
         * 关联实例的名称。
         * @example `nginx`
         */
        InstanceName: string;
        /**
         * 告警事件的状态。取值包括：
         * - **1**：PENDING（待处理）
         * - **2**：IGNORE（已忽略）
         * - **4**：HANDLED（已确认）
         * - **8**：FAULT（已标记误报）
         * - **16**：DEALING（处理中）
         * - **32**：DONE（处理完毕）
         * - **64**：EXPIRE（已经过期）
         * @example `1`
         */
        EventStatus: number;
        /**
         * 告警事件检测支持的产品售卖版本。取值包括：
         * - **0**：基础版本
         * - **1**：企业版本
         * @example `1`
         */
        SaleVersion: string;
        /**
         * 告警事件操作的错误码。
         * @example `kill_and_quara.Success`
         */
        OperateErrorCode: string;
        /**
         * 告警事件的完整名称。
         * @example `Unusual Logon-Login with unusual location`
         */
        Name: string;
        /**
         * 告警事件是否有溯源信息。取值：
         * - **true**：有溯源
         * - **false**：无溯源
         * @example `true`
         */
        HasTraceInfo: boolean;
        /**
         * 数据来源（可忽略）。
         * @example `aegis_suspicious_****`
         */
        DataSource: string;
        /**
         * 告警事件操作的时间戳，单位为毫秒。
         * @example `1631699497000`
         */
        OperateTime: number;
        /**
         * 告警事件子类型。
         * @example `login_common_location`
         */
        EventSubType: string;
        /**
         * 是否离线分析的告警。
         * @example `true`
         */
        Advanced: boolean;
        /**
         * 首次发生的时间戳，单位为毫秒。
         * @example `1631699497000`
         */
        OccurrenceTimeStamp: number;
        /**
         * 受告警事件影响的资产实例的ID。
         * @example `i-9dp6dwsxdl9z5u1e2f****`
         */
        InstanceId: string;
        /**
         * 告警事件类型。
         * @example `Unusual Logon`
         */
        AlarmEventTypeDisplay: string;
        /**
         * 关联实例的私网IP。
         * @example `100.100.XX.XX`
         */
        IntranetIp: string;
        /**
         * 告警事件最近发生时间。
         * @example `2018-09-26 01:51:01`
         */
        LastTime: string;
        /**
         * 告警事件操作的备注信息。
         * @example `success`
         */
        OperateMsg: string;
        /**
         * 关联实例的唯一标识。
         * @example `bf6b30d3-eea8-4924-9f0a-****`
         */
        Uuid: string;
        /**
         * K8sPod名称。
         * @example `myapp-pod
        `
         */
        K8sPodName: string;
        /**
         * 容器ID。
         * @example `container_1648601865161_14925_02_000****`
         */
        ContainerId: string;
        /**
         * 告警事件类型。
         * @example `Unusual Logon`
         */
        AlarmEventType: string;
        /**
         * K8s命名空间。
         * @example `default`
         */
        K8sNamespace: string;
        /**
         * 是否自动防御。
         * @example `true`
         */
        AutoBreaking: boolean;
        /**
         * K8s节点名称。
         * @example `N/A`
         */
        K8sNodeName: string;
        /**
         * 告警事件名称。
         * @example `login_common_location`
         */
        AlarmEventName: string;
        /**
         * 安全告警的唯一key。
         * @example `e17e****`
         */
        UniqueInfo: string;
        /**
         * 恶意行为防御规则状态。取值包括：
         * - **open**：开启
         * - **close**：关闭
         * @example `open`
         */
        MaliciousRuleStatus: string;
        /**
         * 告警事件的危险等级。取值包括：
         * - **serious**：紧急
         * - **suspicious**：可疑
         * - **remind**：提醒
         * @example `serious`
         */
        Level: string;
        /**
         * 告警事件的唯一标识ID。
         * @example `1000`
         */
        Id: number;
        /**
         * 告警事件详情。
         */
        Details: {
            /**
             * 告警事件类型。
             * @example `text`
             */
            Type: string;
            /**
             * 告警事件发生路径。
             * @example `/etc/crontab`
             */
            Value: string;
            /**
             * 告警事件显示名称。
             * @example `Login with unusual location`
             */
            NameDisplay: string;
            /**
             * 告警事件发生路径。
             * @example `/etc/crontab`
             */
            ValueDisplay: string;
        }[];
        /**
         * 告警事件的备注信息。
         */
        EventNotes: {
            /**
             * 备注信息。
             * @example `Test`
             */
            Note: string;
            /**
             * 事件记录ID。
             * @example `123`
             */
            NoteId: number;
            /**
             * 事件记录时间。
             * @example `2018-09-26 01:51:01
            `
             */
            NoteTime: string;
        }[];
        /**
         * 集群ID。
         * @example `c2051775877374cccbf68af596e6****`
         */
        clusterId: string;
        /**
         * 镜像UUID。
         * @example `70489fb520cea585ad9761d5a842****`
         */
        ImageUuid: string;
        /**
         * 支持云沙箱检出。取值包括：
         * - **true**：支持。
         * - **false**：不支持。
         * @example `true`
         */
        DisplaySandboxResult: boolean;
        /**
         * 是否支持大模型分析标签。取值包括：
         * - **true**：支持。
         * - **false**：不支持。
         * @example `true`
         */
        LargeModel: boolean;
        MarkList: string[];
    }[];
}
