export interface ModifyAntiBruteForceRuleRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 暴力破解防御规则的ID。
     * @example `65778`
     */
    "Id": number;
    /**
     * 暴力破解防御规则的名称。
     * @example `TestRule`
     */
    "Name"?: string;
    /**
     * 账号登录失败的时间的阈值，单位为分钟。取值：
     * - **1**:1分钟
     * - **2**：2分钟
     * - **5**：5分钟
     * - **10**：10分钟
     * - **15**：15分钟
     * @example `1`
     */
    "Span"?: number;
    /**
     * 账号登录失败次数的阈值。取值：
     * - **2**：2次
     * - **3**：3次
     * - **4**：4次
     * - **5**：5次
     * - **10**：10次
     * - **50**：50次
     * - **80**：80次
     * - **100**：100次
     * @example `10`
     */
    "FailCount"?: number;
    /**
     * 禁止账号登录的时长，单位为分钟。取值：
     * - **5**：5分钟
     * - **15**：15分钟
     * - **30**：30分钟
     * - **60**：1小时
     * - **120**：2小时
     * - **360**：6小时
     * - **720**：12小时
     * - **1440**：24小时
     * - **10080**：7天
     * - **52560000**：永久（100年）
     * @example `5`
     */
    "ForbiddenTime"?: number;
    /**
     * 添加的暴力破解防御规则是否设置为默认策略。取值：
     * - **true**：设置为默认策略
     * - **false**：不设置为默认策略
     * @example `true`
     */
    "DefaultRule"?: boolean;
    /**
     * 暴力破解防御规则生效的服务器列表。
     * @example `uuid-13213-dasda`
     */
    "UuidList"?: string[];
}