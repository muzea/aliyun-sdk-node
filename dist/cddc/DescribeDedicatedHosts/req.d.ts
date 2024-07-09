export interface DescribeDedicatedHostsRequest {
    /**
     * [地域ID](~~198326~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 专属集群ID。您可以登录云数据库专属集群控制台，在**专属集群**列表查看并获取专属集群ID。
     * @example `dhg-h5i4p331f509****`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 订单号。您可以登录用户中心，在**订单列表**查看并获取订单号。
     * @example `123456789`
     */
    "OrderId"?: number;
    /**
     * 主机的存储类型，取值：
     * - **dhg_local_ssd**：本地SSD盘
     * - **dhg_cloud_ssd**、**dhg_cloud_essd**：ESSD云盘
     * @example `dhg_cloud_ssd`
     */
    "HostType"?: string;
    /**
     * 主机状态，取值：
     * - **0**：创建中
     * - **1**：运行中
     * - **2**：故障中
     * - **3**：准备下线
     * - **4**：维护中
     * - **5**：已下线
     * - **6**：重启中
     * - **7**：锁定中
     * > 当主机出现故障时，主机会下线，下线过程中主机会迁移实例数据。
     * @example `1`
     */
    "HostStatus"?: string;
    /**
     * 主机是否可分配实例，取值：
     * - **Allocatable**：允许实例分配
     * - **Suspended**：停止实例分配
     * @example `Allocatable`
     */
    "AllocationStatus"?: string;
    /**
     * 可用区ID。您可以调用[DescribeRegions](~~214103~~)接口获取可用区ID。
     * @example `ap-southeast-1a`
     */
    "ZoneId"?: string;
    /**
     * 专属集群的主机ID，您可以登录云数据库专属集群控制台，在**主机列表**查看并获取主机ID。
     * @example `ch-bp10a5id3boqi****`
     */
    "DedicatedHostId"?: string;
    /**
     * 展示总页码数。
     * @example `50`
     */
    "PageNumbers"?: number;
    /**
     * 每页展示数目。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 查询绑定有该标签的主机，包括TagKey和TagValue。单次最多支持传入5组值，格式：{"key1":"value1","key2":"value2"...}。
     * > 按照主机标签过滤主机信息时，不需要填写**DedicatedHostId**参数，否则会按照**DedicatedHostId**过滤主机信息。
     * @example `{"key1":"value1"}`
     */
    "Tags"?: string;
}
