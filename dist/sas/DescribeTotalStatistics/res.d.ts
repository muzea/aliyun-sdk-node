export interface DescribeTotalStatisticsResponse {
    /**
     * 告警级别为可疑的数量。
     * @example `28`
     */
    SuspiciousmediumTotal: number;
    /**
     * 漏洞级别为中的数量。
     * @example `0`
     */
    VulLaterSum: number;
    /**
     * WebShell告警的数量。
     * @example `0`
     */
    Trojan: number;
    /**
     * 安骑士安全告警的数量。
     * @example `0`
     */
    Suspicious: number;
    /**
     * 紧急程度为低的基线检查数量。
     * @example `0`
     */
    HealthlowTotal: number;
    /**
     * Web-CMS漏洞数量。
     * @example `0`
     */
    Patch: number;
    /**
     * 告警级别为紧急的数量。
     * @example `0`
     */
    SuspiciousseriousTotal: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7`
     */
    RequestId: string;
    /**
     * 漏洞级别为高的数量。
     * @example `16`
     */
    VulAsapSum: number;
    /**
     * 客户端是否在线。取值：
     * - **true**：在线
     * - **false**：离线
     * @example `true`
     */
    Online: boolean;
    /**
     * 等级为中的基线风险数量。
     * @example `0`
     */
    HealthmediumTotal: number;
    /**
     * 安骑士或云安全中心告警数量。
     * > - 若**Type**为 **sas**：该数据表示云安全中心告警数量
     * > -  若**Type**为 **aqs**：表示安骑士告警数量
     * @example `0`
     */
    Newsuspicious: number;
    /**
     * 资产登录次数。
     * @example `0`
     */
    Account: number;
    /**
     * 已修复漏洞总数。
     * @example `0`
     */
    VulDealedTotal: number;
    /**
     * 安全告警总数。
     * @example `0`
     */
    SuspiciousTotal: number;
    /**
     * 已处理安全告警数量。
     * @example `0`
     */
    SuspiciousdealedTotal: number;
    /**
     * 已修复基线检查总数。该字段已废弃。
     * @example `0`
     */
    HealthdealedTotal: number;
    /**
     * 安全告警总数。该字段已废弃。
     * @example `0`
     */
    SuspicioushighTotal: number;
    /**
     * 等级为低的待修复漏洞数量。
     * @example `0`
     */
    VulNntfSum: number;
    /**
     * 漏洞数量。
     * @example `0`
     */
    VulTotal: number;
    /**
     * 告警级别为提醒的数量。
     * @example `0`
     */
    SuspiciouslowTotal: number;
    /**
     * 基线检查总数。
     * @example `0`
     */
    HealthTotal: number;
    /**
     * 未修复的漏洞数量。
     * @example `0`
     */
    Vul: number;
    /**
     * 未修复的基线检查总数。
     * @example `0`
     */
    Health: number;
    /**
     * 紧急程度为紧急的基线检查数量。该字段已废弃。
     * @example `0`
     */
    HealthseriousTotal: number;
    /**
     * 紧急程度为高危的基线检查数量。
     * @example `0`
     */
    HealthhighTotal: number;
}
