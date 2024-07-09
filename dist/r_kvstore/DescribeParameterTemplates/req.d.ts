export interface DescribeParameterTemplatesRequest {
    /**
     * 实例的架构，更多信息，请参见[架构介绍](~~86132~~)。取值：
     * * **logic**：集群或读写分离架构。
     * * **normal**：主从架构。
     * <props="china">当**EngineVersion**取值为**6.0**时，本参数不支持传入**logic**。</props>
     * @example `logic`
     */
    "CharacterType": string;
    /**
     * 数据库类型，取值固定为**Redis**。
     * @example `Redis`
     */
    "Engine": string;
    /**
     * Redis实例的大版本，取值：**4.0**、**5.0**、**6.0**或**7.0**。
     * @example `5.0`
     */
    "EngineVersion": string;
    /**
     * 资源组ID。您可以通过调用[ListResourceGroups](~~158855~~)接口获取资源组ID。
     * > 您也可以通过控制台获取资源组ID，相关操作，请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId"?: string;
}
