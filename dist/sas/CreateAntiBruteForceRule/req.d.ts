export interface CreateAntiBruteForceRuleRequest {
    /**
     * 访问源的IP地址。
     * @example `192.168.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 防暴力破解规则的名称。
     * @example `TestAntiBruteForceRule`
     */
    "Name": string;
    /**
     * 设置账号登录失败的时间的阈值，单位为分钟。取值：
     * - **1**：1分钟
     * - **2**：2分钟
     * - **5**：5分钟
     * - **10**：10分钟
     * - **15**：15分钟
     * > Span、FailCount、ForbiddenTime这三个参数组合成一个防暴力破解规则，表示XX分钟内账号登录失败超过XX次，该账号禁止登录XX分钟。
     * @example `1`
     */
    "Span": number;
    /**
     * 设置账号登录失败次数的阈值。单位为次。取值：2、3、4、5、10、50、80、100。
     * @example `2`
     */
    "FailCount": number;
    /**
     * 设置禁止账号登录的时长，单位为分钟。取值：
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
    "ForbiddenTime": number;
    /**
     * 防暴力破解规则是否设置为默认规则。取值：
     * - **true**：是
     * - **false**：否
     * > 资产不在其他规则时，会使用默认规则。
     * @example `true`
     */
    "DefaultRule"?: boolean;
    /**
     * 防暴力破解规则生效的服务器的UUID列表。
     */
    "UuidList": string[];
}
