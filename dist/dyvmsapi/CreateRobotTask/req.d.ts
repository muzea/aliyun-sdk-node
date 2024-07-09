export interface CreateRobotTaskRequest {
    /**
     * 任务名称。支持中文和英文，不超过30个字符。
     * @example `任务测试`
     */
    "TaskName": string;
    /**
     * 指定机器人ID，即话术ID。表示选择哪个机器人话术发起呼叫。
     * 您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)，选择**智能语音机器人**>**话术管理**查看话术ID。
     * @example `1000023****`
     */
    "DialogId": number;
    /**
     * 公司名称。需和资质管理页面中的**企业名称**完全一致。
     * @example `阿里巴巴通信技术（北京）有限公司`
     */
    "CorpName"?: string;
    /**
     * 外呼主叫号码。
     * 必须是已购买的号码，多个号码使用半角逗号（,）隔开。您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)，在**语音号码**>**真实号管理**页面查看已购买的号码。
     * @example `0571****5678`
     */
    "Caller": string;
    /**
     * 是否启用号码状态（早媒体）识别标识。取值：
     * - **false**（默认值）：不启用。
     * - **true**：启用。
     * > 设为**true**会记录通话未接听的原因。
     * @example `true`
     */
    "NumberStatusIdent": boolean;
    /**
     * 是否自动重拨。取值：
     * - **1**：重拨。
     * - **0**：不重拨。
     * @example `1`
     */
    "RetryType": number;
    /**
     * 需要重拨的通话状态。多个状态使用半角逗号（,）分隔。取值：
     * - **200010**：关机。
     * - **200011**：停机。
     * - **200002**：占线。
     * - **200012**：呼损。
     * - **200005**：无法接通。
     * - **200003**：无应答。
     * @example `200010,200011`
     */
    "RecallStateCodes"?: string;
    /**
     * 重拨次数。
     * @example `1`
     */
    "RecallTimes"?: number;
    /**
     * 重拨间隔。单位：分钟，必须大于1。
     * > 最大间隔为30分钟。
     * @example `5`
     */
    "RecallInterval"?: number;
    /**
     * 是否调用自有线路。取值：
     * - **false**（默认值）：不调用。
     * - **true**：调用。
     * > 设为**true**不会对主叫号码做校验。
     * @example `false`
     */
    "IsSelfLine"?: boolean;
}
