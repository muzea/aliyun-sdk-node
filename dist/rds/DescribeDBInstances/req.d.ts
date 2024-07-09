export interface DescribeDBInstancesRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 废弃参数，无需配置。
     * @example `API`
     */
    "proxyId"?: string;
    /**
     * 数据库类型，取值：
     * * **MySQL**
     * * **SQLServer**
     * * **PostgreSQL**
     * * **MariaDB**
     * 默认返回所有数据库类型。
     * @example `MySQL`
     */
    "Engine"?: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-a`
     */
    "ZoneId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例状态，详情请参见[实例状态表](~~26315~~)。
     * @example `Running`
     */
    "DBInstanceStatus"?: string;
    /**
     * 实例的过期状态，取值：
     * * **True**：已过期
     * * **False**：未过期
     * @example `True`
     */
    "Expired"?: string;
    /**
     * 可基于实例ID或者实例备注模糊搜索。
     * @example `rm-uf6w`
     */
    "SearchKey"?: string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId"?: string;
    /**
     * 实例类型，取值：
     * * **Primary**：主实例
     * * **Readonly**：只读实例
     * * **Guard**：灾备实例
     * * **Temp**：临时实例
     * 默认返回所有实例类型。
     * @example `Primary`
     */
    "DBInstanceType"?: string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 每页记录数，取值：**1**~**100**。
     * 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 实例的网络类型，取值：
     * * **VPC**：专有网络下的实例
     * * **Classic**：经典网络下的实例
     * 默认返回所有网络类型下的实例。
     * @example `Classic`
     */
    "InstanceNetworkType"?: string;
    /**
     * VPC ID。
     * @example `vpc-uf6f7l4fg90****`
     */
    "VpcId"?: string;
    /**
     * 交换机ID。
     * @example `vsw-uf6adz52c2p****`
     */
    "VSwitchId"?: string;
    /**
     * 实例规格，详见[实例规格表](~~26312~~)。
     * @example `rds.mys2.small`
     */
    "DBInstanceClass"?: string;
    /**
     * 数据库版本。
     * @example `8.0`
     */
    "EngineVersion"?: string;
    /**
     * 付费类型，取值：
     * * **Postpaid**：按量付费
     * * **Prepaid**：包年包月
     * @example `Postpaid`
     */
    "PayType"?: string;
    /**
     * 实例的访问模式，取值：
     * * **Standard**：标准访问模式
     * * **Safe**：数据库代理模式
     * 默认返回所有访问模式下的实例。
     * @example `Standard`
     */
    "ConnectionMode"?: string;
    /**
     * 查询绑定有该标签的实例，包括TagKey和TagValue。单次最多支持传入5组值，格式：{"key1":"value1","key2":"value2"...}。
     * @example `{"key1":"value1"}`
     */
    "Tags"?: string;
    /**
     * 专属集群ID。
     * @example `dhg-7a9****`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 专属集群内的主机ID。
     * @example `i-bp****`
     */
    "DedicatedHostId"?: string;
    /**
     * 是否返回实例系列（Category）信息，取值：
     * * **0**：不返回
     * * **1**：返回
     * @example `0`
     */
    "InstanceLevel"?: number;
    /**
     * 实例的连接地址。通过该连接地址查询对应的实例。
     * @example `rm-uf6wjk5****.mysql.rds.aliyuncs.com`
     */
    "ConnectionString"?: string;
    /**
     * 翻页凭证。取值为上一次调用**DescribeDBInstances**接口时返回的**NextToken**参数值。如果调用结果分多页展示，再次调用接口时传入该值便可以展示下一页的内容。
     * @example `o7PORW5o2TJg****`
     */
    "NextToken"?: string;
    /**
     * 每页记录数。取值：**1~100**。
     * 默认值：**30**。
     * >传入该参数，则**PageSize**和**PageNumber**参数不可用。
     * @example `30`
     */
    "MaxResults"?: number;
    /**
     * 实例过滤条件参数及其值的JSON串
     * @example `{"babelfishEnabled":"true"}`
     */
    "Filter"?: string;
    /**
     * 实例的系列。取值：
     * - **Basic**：基础系列
     * - **HighAvailability**：高可用系列
     * - **cluster**：集群系列
     * - **serverless_basic**：Serverless
     * @example `cluster`
     */
    "Category"?: string;
}
