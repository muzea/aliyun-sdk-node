export interface ModifyDedicatedHostAttributeRequest {
    /**
     * 主机所在[地域ID](~~198326~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 主机ID。您可以登录云数据库专属集群控制台，在**主机列表**查看并获取主机ID。
     * @example `ch-bp10a5id3boqi****`
     */
    "DedicatedHostId": string;
    /**
     * 主机名称。
     * @example `mysql-host`
     */
    "HostName"?: string;
    /**
     * 主机是否可分配实例，取值：
     * - **1**：允许实例分配。
     * - **0**：停止实例分配。
     * @example `1`
     */
    "AllocationStatus"?: string;
}
