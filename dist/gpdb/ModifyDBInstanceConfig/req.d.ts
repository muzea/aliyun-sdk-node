export interface ModifyDBInstanceConfigRequest {
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
     * 实例描述。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceDescription"?: string;
    /**
     * 计算资源阈值。取值范围为8~32，单位为ACU。
     * @example `32`
     */
    "ServerlessResource"?: number;
    /**
     * 空闲释放等待时长。即当无业务流量的时长达到指定时长后，实例转为空闲状态。单位为秒，最小值为60，默认值为600。
     * @example `600`
     */
    "IdleTime"?: number;
}
