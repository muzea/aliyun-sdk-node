export interface ModifyDedicatedHostGroupAttributeRequest {
    /**
     * 专属集群所在地域ID。可查看[地域信息](~~198326~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 专属集群ID。
     * > 您可通过云数据库专属集群控制台集群列表查看目标专属集群ID。
     * @example `dhg-h5i4p331f509****`
     */
    "DedicatedHostGroupId": string;
    /**
     * 专属集群的名称。
     * @example `mysql-cluster`
     */
    "DedicatedHostGroupDesc"?: string;
    /**
     * 专属集群的CPU超配比，取值范围：**100%**~**300%**。
     * > 若您修改CPUC超配比为**300%**，代表所有实例的CPU资源之和是实际CPU资源的3倍，最大化使用CPU资源。
     * @example `300`
     */
    "CpuAllocationRatio"?: number;
    /**
     * 专属集群中每台主机的内存最大使用率。取值范围：**0%**~**100%**。
     * @example `100`
     */
    "MemAllocationRatio"?: number;
    /**
     * 专属集群的空间超配比。取值范围：**100%**~**200%**。
     * @example `200`
     */
    "DiskAllocationRatio"?: number;
    /**
     * 专属集群资源调度的分配策略。取值：
     * - **Evenly**：均衡分配，最大化追求更稳定的系统表现，优先从未分配资源或已分配资源较少的主机中分配资源。
     * - **Intensively**：紧凑分配，最大化追求更充分的资源利用率，优先从创建时间较早且已分配资源较多的主机中分配资源。
     * @example `Intensively`
     */
    "AllocationPolicy"?: string;
    /**
     * 主机故障时系统的处理策略。取值：
     * - **Auto**：自动替换主机。
     * - **Manual**：手动替换主机。
     * > 仅创建数据库引擎为**MySQL**的专属集群时，您可以根据实际需求选择主机故障处理策略。其余引擎均请使用Auto默认值。
     * @example `Auto`
     */
    "HostReplacePolicy"?: string;
    /**
     * 是否开放专属集群内的主机的OS权限。取值：
     * - **0**：关闭
     * - **1**：开放
     * > 仅创建数据库引擎为**MySQL、SQL Server、PostgreSQL**的专属集群时，您可以根据实际需求选择主机开放OS权限。其余引擎暂未提供主机开放OS权限功能，该参数取值默认为关闭。
     * @example `0`
     */
    "OpenPermission"?: string;
}
