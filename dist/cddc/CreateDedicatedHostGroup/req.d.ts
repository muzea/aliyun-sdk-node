export interface CreateDedicatedHostGroupRequest {
    /**
     * 地域ID。可查看[地域信息](~~198326~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库引擎类型，取值：
     * - **MySQL**
     * - **SQL Server**
     * <props="china">
     * -  **Redis**</props>
     * </props>
     * @example `MySQL`
     */
    "Engine": string;
    /**
     *  专属集群的CPU超配比。
     * > 取值范围：**100%**~**300%**，默认取值为**200%**，代表所有实例的CPU资源之和可以是实际CPU资源的2倍，充分利用资源。
     * @example `200`
     */
    "CpuAllocationRatio"?: number;
    /**
     * 专属集群中每台主机的内存最大使用率。
     * > 取值范围：**0%**~**100%**，默认取值为**100%**。
     * @example `100`
     */
    "MemAllocationRatio"?: number;
    /**
     * 专属集群的空间超配比。
     * > 取值范围：**100%**~**300%**，默认取值为**200%**，代表所有实例的空间资源之和可以是实际空间资源的2倍，充分利用资源。该设置对于 SQLServer 无效。
     * @example `200`
     */
    "DiskAllocationRatio"?: number;
    /**
     * 专属集群资源调度的分配策略。取值：
     * - **Evenly**（默认）：均衡分配，最大化追求更稳定的系统表现，优先从未分配资源或已分配资源较少的主机中分配资源。
     * - **Intensively**：紧凑分配，最大化追求更充分的资源利用率，优先从创建时间较早且已分配资源较多的主机中分配资源。
     * @example `Evenly`
     */
    "AllocationPolicy"?: string;
    /**
     * 专属集群归属的专有网络ID，可在专有网络控制台左侧单击**专有网络**查看目标专有网络ID。
     * @example `vpc-t4n7v5m6icc0a4314****`
     */
    "VPCId": string;
    /**
     * 主机故障时系统的处理策略。取值：
     * - **Auto**（默认）：自动替换主机。
     * - **Manual**：手动替换主机。
     * > 仅创建数据库引擎为**MySQL**的专属集群时，您可以根据实际需求选择主机故障处理策略。其余引擎均请使用**Auto**默认值。
     * @example `Auto`
     */
    "HostReplacePolicy"?: string;
    /**
     * 客户端生成该参数值，用于保证请求的幂等性，防止重复提交请求。该参数值只能包含ASCII字符，且不超过64个ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz*******`
     */
    "ClientToken": string;
    /**
     * 是否开放专属集群内的主机的OS权限。取值：
     * - **0**：关闭。
     * - **1**：开放。
     * > 仅创建数据库引擎为**MySQL、SQL Server**的专属集群时，您可以根据实际需求选择主机开放OS权限。其余引擎暂未提供主机开放OS权限功能，该参数取值默认为**关闭**。SQLServer 必须要指定开放权限（1）。
     * @example `1`
     */
    "OpenPermission"?: number;
    /**
     * 专属集群的名称。长度为1~64个字符，以大小字母或中文开头，可包含数字、下划线（_）或中划线（-）。
     * @example `mysqlcluster`
     */
    "DedicatedHostGroupDesc"?: string;
}
