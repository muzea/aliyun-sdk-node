export interface DescribeDedicatedHostsRequest {
    /**
     * 地域ID。可以通过接口DescribeRegions查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 专属集群ID。可调用DescribeDedicatedHostGroups获取。
     * @example `dhg-7a9xxxxxxxx`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 订单ID。
     * @example `102565235`
     */
    "OrderId"?: number;
    /**
     * 主机存储类型。取值：
     * * **dhg_cloud_ssd**：ESSD云盘。
     * * **dhg_local_ssd**：SSD本地盘。
     * @example `dhg_cloud_ssd`
     */
    "HostType"?: string;
    /**
     * 主机状态。取值：
     *  * **0**：创建中
     *  * **1**：使用中
     *  * **2**：宕机
     *  * **3**：宕机下线（替换主机中）
     *  * **4**：下线
     *  * **5**：删除
     *  * **6**：重启中
     * @example `1`
     */
    "HostStatus"?: string;
    /**
     * 主机当前是否允许分配实例。取值：
     * * **0**：不允许分配。
     * * **1**：允许分配。
     * @example `1`
     */
    "AllocationStatus"?: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-i`
     */
    "ZoneId"?: string;
    /**
     * 专属集群主机ID。
     * @example `ch-t4nn100ddxxxxxxxx`
     */
    "DedicatedHostId"?: string;
}
