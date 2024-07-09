export interface ReleaseInstancePublicConnectionRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 外网地址。
     * 您可以在AnalyticDB PostgreSQL版控制台的实例**基本信息**页面的**数据库连接**区域查看**外网地址**。
     * @example `gp-bp12ga6v69h86****.gpdb.rds.aliyuncs.com`
     */
    "CurrentConnectionString": string;
    /**
     * 地址类型。取值：
     * - **primary**：主地址。
     * - **cluster**：集群地址，仅多协调节点实例支持创建集群地址。
     * > 默认为主地址。
     * @example `primary`
     */
    "AddressType"?: string;
}
