export interface GetHoneypotAttackStatisticsRequest {
    /**
     * 攻击源IP。
     * @example `47.92.139.**`
     */
    "SrcIp": string;
    /**
     * 攻击源统计信息的类型。取值：
     * - **TOP_ATTACKED_AGENT**：被攻击次数top 5的探针。
     * - **TOP_ATTACKED_IP**：被攻击次数top 5的IP地址。
     * - **ATTACK_EVENT_TYPE**：入侵事件类型。
     * - **ATTACK_HONEYPOT_TYPE**：被入侵蜜罐类型。
     * @example `TOP_ATTACKED_IP`
     */
    "StatisticsType": string;
    /**
     * 开始时间，timestamp格式。
     * @example `1681624877761`
     */
    "StartTimeStamp"?: number;
    /**
     * 结束时间，timestamp格式。
     * @example `1675058931215`
     */
    "EndTimeStamp"?: number;
    /**
     * 风险等级列表。
     */
    "RiskLevelList"?: string[];
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。起始值为**1**。默认值为**1**，表示从第**1**页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示数据最大条数。每页默认显示的数据条数为20条，pagesize参数值为空时，将默认返回20条数据。>建议pagesize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
}
