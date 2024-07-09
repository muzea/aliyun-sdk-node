export interface DescribeDBInstancesOverviewRequest {
    /**
     * 地域ID，您可以调用[DescribeRegions](~~61933~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要查询概览的实例ID。
     * > - 如果不传入该参数，默认查询当前阿里云账号下的所有实例。
     * > - 支持传入多个实例ID，实例ID之间以英文逗号（,）分隔。
     * @example `dds-bp12c5b040dc****`
     */
    "InstanceIds"?: string;
    /**
     * 实例的状态信息，取值详情请参见[实例状态表](~~63870~~)。
     * @example `Running`
     */
    "InstanceStatus"?: string;
    /**
     * 实例的付费类型，取值：
     * - **PrePaid**：预付费，包年包月。
     * - **PostPaid**：按量付费。
     * @example `PostPaid`
     */
    "ChargeType"?: string;
    /**
     * 实例的网络类型，取值：
     * - **Classic**：经典网络。
     * - **VPC**：VPC网络。
     * @example `Classic`
     */
    "NetworkType"?: string;
    /**
     * 实例的引擎版本，取值为 **5.0**、**4.4**、 **4.2**、**4.0**或 **3.4**。
     * @example `4.0`
     */
    "EngineVersion"?: string;
    /**
     * 实例规格。不同类型实例的规格分别请参见：
     * - [单节点实例规格表](~~311407~~)
     * - [副本集实例规格表](~~311410~~)
     * - [分片集群实例规格表](~~311414~~)
     * <props="china">
     * > Serverless实例不需要传入该参数。</props>
     * @example `dds.mongo.2xlarge`
     */
    "InstanceClass"?: string;
    /**
     * 专有网络ID。
     * @example `vpc-bp1nme44gek34slfc****`
     */
    "VpcId"?: string;
    /**
     * 虚拟交换机ID。
     * @example `vsw-bp1e7clcw529l773d****`
     */
    "VSwitchId"?: string;
    /**
     * 实例类型，取值：
     * - **sharding**：分片集群实例。
     * - **replicate**：副本集实例和单节点实例。
     * <props="china">
     * - **serverless**：Serverless实例。
     * </props>
     * > - 请根据实际需求配置，例如您需要查询分片集群实例的概览，则配置该参数的值为**sharding**。
     * > - 不配置该参数时，默认查询所有实例的概览。
     * @example `replicate`
     */
    "InstanceType"?: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 资源组ID。资源组详情请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
}
