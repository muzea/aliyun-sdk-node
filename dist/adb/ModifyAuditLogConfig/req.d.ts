export interface ModifyAuditLogConfigRequest {
    /**
     * 集群ID。
     * @example `am-t4nj8619bz2w3****`
     */
    "DBClusterId": string;
    /**
     * 地域ID，您可通过接口[DescribeRegions](~~143074~~)查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * SQL审计的开启状态。取值说明：
     * - **on**：开启SQL审计。
     * - **off**：关闭SQL审计。
     * @example `on`
     */
    "AuditLogStatus": string;
}
