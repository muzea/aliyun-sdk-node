export interface AllocateInstancePublicConnectionRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 连接地址前缀。
     * 您可以自定义连接地址前缀，例如连接地址前缀为`gp-bp12ga6v69h86****`时，连接地址为`gp-bp12ga6v69h86****.gpdb.rds.aliyuncs.com`。
     * @example `gp-bp12ga6v69h86****`
     */
    "ConnectionStringPrefix": string;
    /**
     * 端口号，例如5432。
     * @example `5432`
     */
    "Port": string;
    /**
     * 网络类型。取值：
     * - **primary**：主地址。
     * - **cluster**：集群地址，仅多协调节点实例支持创建集群地址。
     * > 默认为主地址。
     * @example `primary`
     */
    "AddressType"?: string;
}
