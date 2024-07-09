export interface GetAgentlessTaskCountResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D03DD0FD-6041-5107-AC00-383E28F1****`
     */
    RequestId: string;
    /**
     * 风险主机数。
     * @example `1`
     */
    RiskMachine: number;
    /**
     * 扫描主机数。
     * @example `1`
     */
    ScanMachine: number;
    /**
     * 恶意样本文件的总数。
     * @example `1`
     */
    MaliciousFile: number;
    /**
     * 漏洞风险数。
     * @example `1`
     */
    Vulnerability: number;
    /**
     * 上次扫描时间的时间戳。
     * @example `1682577532318`
     */
    LastTaskTime: number;
    /**
     * 基线扫描项的总数。
     * @example `1`
     */
    BaselineCheckCount: number;
    /**
     * 应用漏洞的总数。
     * @example `1`
     */
    ScaVulCount: number;
    /**
     * 系统漏洞的总数。
     * @example `1`
     */
    CveVulCount: number;
    /**
     * Windows系统漏洞的总数。
     * @example `1`
     */
    SysVulCount: string;
    SensitiveFileCount: number;
}
