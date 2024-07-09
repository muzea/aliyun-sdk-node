export interface DescribeDBInstancesForCloneRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
     */
    "ClientToken"?: string;
    /**
     * 代理模式ID。
     * @example `API	`
     */
    "proxyId"?: string;
    /**
     * 数据库类型。取值：
     * - MySQL
     * - SQLServer
     * - PostgreSQL
     * - PPAS
     * - MariaDB
     * 默认返回所有数据库类型的实例。
     * @example `MySQL`
     */
    "Engine"?: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
    /**
     * 实例状态。取值请参见[实例状态表](~~26315~~)。
     * @example `Running`
     */
    "DBInstanceStatus"?: string;
    /**
     * 实例是否已过期。取值：
     * - **True**：已过期
     * - **False**：未过期
     * @example `True`
     */
    "Expired"?: string;
    /**
     * 搜索关键词，可基于实例ID或者实例备注模糊搜索。
     * @example `rm-uf6w`
     */
    "SearchKey"?: string;
    /**
     * 实例ID.
     * @example `rm-uf6wjk5xxxxxxxxxx`
     */
    "DBInstanceId"?: string;
    /**
     * 实例类型，取值：
     * - **Primary**：主实例
     * - **Readonly**：只读实例
     * - **Guard**：灾备实例
     * - **Temp**：临时实例
     * 默认返回所有类型的实例。
     * @example `Primary`
     */
    "DBInstanceType"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 每页记录数，取值：**1~100**。
     * 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 实例的网络类型，取值：
     * - **Classic**：经典网络
     * - **VPC**：专有网络
     * @example `Classic`
     */
    "InstanceNetworkType"?: string;
    /**
     * 专有网络ID。
     * @example `vpc-j6cjvqms29yxxxxxxxxxx`
     */
    "VpcId"?: string;
    /**
     * 交换机ID。
     * @example `vsw-j6csw46bgrgkxxxxxxxxxx`
     */
    "VSwitchId"?: string;
    /**
     * 实例规格。详情请参见[实例规格表](~~26312~~)。
     * @example `mysql.n1.micro.1`
     */
    "DBInstanceClass"?: string;
    /**
     * 数据库版本号。
     * @example `5.7`
     */
    "EngineVersion"?: string;
    /**
     * 数据库节点类型。取值：
     * - **Master**：主节点
     * - **Slave**：备节点
     * @example `Master`
     */
    "NodeType"?: string;
    /**
     * 实例的付费类型。取值：
     * - **Postpaid**：后付费（按量付费）
     * - **Prepaid**：预付费（包年包月）
     * 默认返回所有付费类型的实例。
     * @example `Postpaid`
     */
    "PayType"?: string;
    /**
     * 实例的访问模式，取值：
     * - **Standard**：标准访问模式
     * - **Safe**：数据库代理模式
     * 默认返回所有访问模式下的实例。
     * @example `Standard`
     */
    "ConnectionMode"?: string;
    /**
     * 当前实例ID。
     * @example `rm-uf6wjk5xxxxxxxxxx`
     */
    "CurrentInstanceId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
