export interface ModifyDBInstanceResourceGroupRequest {
    /**
     * 实例当前所属的资源组ID。如何获取资源组ID，请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 目标资源组ID。如何获取资源组ID，请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-bp67acfmxazb4b****`
     */
    "NewResourceGroupId": string;
}
