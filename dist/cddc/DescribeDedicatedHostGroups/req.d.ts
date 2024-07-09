export interface DescribeDedicatedHostGroupsRequest {
    /**
     * 地域ID。可查看[地域信息](~~198326~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 专属集群ID。您可通过云数据库专属集群控制台集群列表查看目标专属集群ID。
     *    - 该参数为空时，默认返回该地域内所有主机信息。
     *    - 若传入具体的专属集群ID，则返回该地域该集群内所有主机信息。
     *
     * @example `dhg-872yt76ann7e****`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 主机镜像。取值：
     * - **WindowsWithMssqlEntAlwaysonLicense**：SQL
     *  Server集群版
     * - **WindowsWithMssqlStdLicense**：SQL
     *  Server标准版
     * - **WindowsWithMssqlEntLicense**：SQL
     *  Server企业版
     * - **WindowsWithMssqlWebLicense**：SQL
     *  Server Web版
     * - **AliLinux**：其他主机镜像。
     * @example `AliLinux`
     */
    "ImageCategory"?: string;
    /**
     * 根据数据库引擎类型过滤主机列表。取值：
     * <li>MySQL</li>
     * <li>SQL Server</li>
     * <li>PosgreSQL</li>
     * <li props="china">Redis</li>
     * @example `MySQL`
     */
    "Engine"?: string;
}
