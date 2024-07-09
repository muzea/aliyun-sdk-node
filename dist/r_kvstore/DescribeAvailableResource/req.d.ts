export interface DescribeAvailableResourceRequest {
    /**
     * 地域ID，您可以调用[DescribeRegions](~~61012~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID，您可以调用[DescribeZones](~~94527~~)查询。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
    /**
     * 付费类型，取值：
     * * **PrePaid**：包年包月。
     * * **PostPaid**：按量付费。
     * > 默认值：**PrePaid**。
     * @example `PrePaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 订单类型，取值：
     * * **BUY**（默认）：新购。
     * * **UPGRADE**：升级实例规格配置。
     * * **DOWNGRADE**：降级实例规格配置。
     * @example `BUY`
     */
    "OrderType"?: string;
    /**
     * 引擎类型，取值：
     * * **Redis**。
     * * **Memcache**。
     * @example `Redis`
     */
    "Engine"?: string;
    /**
     * 资源组ID。您可以通过调用[ListResourceGroups](~~158855~~)接口获取资源组ID。
     * > 您也可以通过控制台获取资源组ID，相关操作，请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-acfmyiu4e******`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例ID。
     * > 当**OrderType**取值为**UPGRADE**或**DOWNGRADE**时，本参数才可用且必须传入。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId"?: string;
    /**
     * 返回值的语言，取值：
     * * **zh-CN**：中文，默认值。
     * * **en-US**：英文。
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 产品类型，取值：
     * - **Local**：社区版实例（经典版）或内存型（经典版）。
     * - **Tair_rdb**：内存型（云原生版）。
     * - **Tair_scm**：持久内存型。
     * - **Tair_essd**：磁盘型。
     * - **OnECS**：社区版实例（云原生版）。
     * @example `Local`
     */
    "ProductType"?: string;
    /**
     * 数据节点ID，可调用[DescribeLogicInstanceTopology](~~94665~~)获取。对于获取到的数据节点ID，需要去除井号（`#`）及其后面的内容，例如仅保留r-bp10noxlhcoim2****-db-0。
     * > 传入本参数前，您还需要传入**InstanceId**参数，且要求实例为集群或读写分离架构。
     * @example `r-bp1zxszhcgatnx****-db-0`
     */
    "NodeId"?: string;
    /**
     * Redis产品系列，取值如下：
     * - **professional**：标准版，支持单副本、主备、读写分离、集群四种架构，扩展性强。
     *  <props="china">
     * -  **economical**：仅支持主备架构，具有价格优势，更多信息请参见[倚天版实例](~~2489678~~)。</props>
     * @example `professional`
     */
    "InstanceScene"?: string;
}
