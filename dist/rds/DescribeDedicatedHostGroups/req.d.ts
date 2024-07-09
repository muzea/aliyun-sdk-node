export interface DescribeDedicatedHostGroupsRequest {
    /**
     * 地域ID。可以通过接口DescribeRegions查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 专属集群ID。
     * @example `dhg-7a9xxxxxxxx`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 根据主机镜像查询专属集群。取值：
     * * **WindowsWithMssqlStdLicense**：Windows（含SQL Server标准版License）。
     * * **WindowsWithMssqlEntLisence**：Windows（含SQL Server企业版License）。
     * * **WindowsWithMssqlWebLisence**：Windows（含SQL ServerWeb版License）。
     * * **AliLinux**：Linux。
     * @example `WindowsWithMssqlStdLicense`
     */
    "ImageCategory"?: string;
}
