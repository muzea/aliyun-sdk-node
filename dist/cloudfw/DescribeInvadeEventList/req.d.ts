export interface DescribeInvadeEventListRequest {
    /**
     * 访问者源IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 设置查询开始时间。使用秒级时间戳格式表示。不填表示以最近30天开始查询。
     * @example `1656750960`
     */
    "StartTime"?: string;
    /**
     * 设置查询结束时间。使用秒级时间戳格式表示。不填表示以当前时间结束。
     * @example `1656837360`
     */
    "EndTime"?: string;
    /**
     * 设置分页查询返回第几页数据。
     * 默认值为1，表示返回第1页数据。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 设置分页查询每页包含多少条结果。
     * 默认值为6，表示每页包含6条结果。最大值为10。
     * @example `1`
     */
    "PageSize"?: string;
    /**
     * 实例ID。
     * @example `ins_1321_asedb_****`
     */
    "AssetsInstanceId"?: string;
    /**
     * 实例名称。
     * @example `ECS_test`
     */
    "AssetsInstanceName"?: string;
    /**
     * 是否已忽略该失陷感知。取值：
     * - **true**：已忽略。
     * - **false**：未忽略。
     * @example `true`
     */
    "IsIgnore"?: string;
    /**
     * 受影响的资产IP。
     * @example `10.0.XX.XX`
     */
    "AssetsIP"?: string;
    /**
     * 失陷感知事件的ID。
     * @example `69d189e2-ec17-4676-a2fe-02969234****`
     */
    "EventKey"?: string;
    /**
     * 失陷感知事件的名称。
     * @example `event_test`
     */
    "EventName"?: string;
    /**
     * 失陷感知事件的UUID。
     * @example `fadd-dfdd-****`
     */
    "EventUuid"?: string;
    /**
     * 成员账号UID。
     * @example `135809047715****`
     */
    "MemberUid"?: number;
    /**
     * 处理状态列表。
     */
    "ProcessStatusList"?: number[];
    /**
     * 风险评估等级。
     */
    "RiskLevel"?: number[];
}
