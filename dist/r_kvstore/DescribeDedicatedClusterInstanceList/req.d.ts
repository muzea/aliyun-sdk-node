export interface DescribeDedicatedClusterInstanceListRequest {
    /**
     * 地域ID，您可以调用[DescribeRegions](~~61012~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID，您可以调用[DescribeZones](~~94527~~)查询。
     * @example `cn-hangzhou-e`
     */
    "ZoneId"?: string;
    /**
     * 实例ID。
     * > 该实例必须是通过专属集群创建的，更多信息，请参见[云数据库专属集群MyBase](~~141455~~)。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId"?: string;
    /**
     * 实例状态，取值：
     * * **0**：创建中。
     * * **1**：运行中。
     * * **3**：删除中。
     * * **5**：变配中。
     * * **6**：迁移中。
     * * **7**：备份恢复中。
     * * **8**：切换中。
     * * **9**：删除过期数据。
     * @example `1`
     */
    "InstanceStatus"?: number;
    /**
     * 实例连接地址的网络类型，取值：
     * * **0**：公网。
     * * **1**：经典网络。
     * * **2**：专有网络VPC。
     * @example `2`
     */
    "InstanceNetType"?: string;
    /**
     * 数据库类型，取值固定为**Redis**。
     * @example `Redis`
     */
    "Engine"?: string;
    /**
     * 数据库版本号，取值固定为**5.0**。
     * @example `5.0`
     */
    "EngineVersion"?: string;
    /**
     * 专属集群ID，可在专属集群控制台的专属集群信息页获取。
     * > 如需传入多个，ID间使用英文逗号（,）分隔。
     * @example `dhg-5f2v98840ioq****`
     */
    "ClusterId"?: string;
    /**
     * 专属集群的主机ID，可调用[DescribeDedicatedHosts](~~200944~~)获取。
     * > 如需传入多个，ID间使用英文逗号（,）分隔。
     * @example `ch-t4n664a9mal4c****`
     */
    "DedicatedHostName"?: string;
    /**
     * 页码，大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页可展示的最大记录数，取值：**30**、**50**、**100**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
}
