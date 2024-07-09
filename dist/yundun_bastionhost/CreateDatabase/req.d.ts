export interface CreateDatabaseRequest {
    /**
     * 堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-7mz2g5hu20e`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 指定新创建数据库所属的网络域ID。
     * > 您可以调用[ListNetworkDomains ](~~2758827~~)接口获取该参数。
     * @example `1`
     */
    "NetworkDomainId"?: string;
    /**
     * 数据库类型，取值如下：
     * - **MySQL**
     * - **Oracle**
     * - **PostgreSQL**
     * - **SQLServer**
     * @example `MySQL`
     */
    "DatabaseType": string;
    /**
     * 指定新创建数据库的地址类型。取值:
     * - Public：公网地址
     * - Private：私网地址
     * @example `Public`
     */
    "ActiveAddressType": string;
    /**
     * 私网地址。支持IPv4地址和域名格式。
     * >ActiveAddressType选择Private时，该参数为必填项。
     * @example `192.168.XX.XX`
     */
    "DatabasePrivateAddress"?: string;
    /**
     * 公网地址。支持IPv4地址和域名格式。
     * >ActiveAddressType选择Public时，该参数为必填项。
     * @example `www.example.com`
     */
    "DatabasePublicAddress"?: string;
    /**
     * 数据库的访问端口。数据库来源为**Local**，该参数为必填项。
     * @example `5433`
     */
    "DatabasePort"?: number;
    /**
     * 新创建的数据库实例名称。数据库来源为**Local**，该参数为必填项。
     * @example `Test01`
     */
    "DatabaseName"?: string;
    /**
     * 指定新创建的数据库实例ID。
     * > **Source**选择**Rds**或**PolarDB**时，该参数为必填项。
     * @example `i-bp19ienyt0yax748****`
     */
    "SourceInstanceId"?: string;
    /**
     * 指定新创建数据库的来源。取值：
     * - Local：本地数据库实例
     * - Rds：RDS类型数据库实例
     * - PolarDB: PolarDB类型数据库实例
     * @example `Local`
     */
    "Source": string;
    /**
     * 指定新创建的数据库的备注信息。最多支持500字符。
     * @example `cpp`
     */
    "Comment"?: string;
    /**
     * 指定新创建的数据库实例所属地域ID。
     * >**Source**为**Rds**或**PolarDB**时，该参数为必填项。
     * @example `cn-shanghai`
     */
    "SourceInstanceRegionId"?: string;
    /**
     * Source为PolarDB时必传，表示PolarDB的Endpoint类型，取值：
     * - Cluster：集群地址
     * - Primary：主地址
     * @example `Cluster`
     */
    "PolarDBEndpointType"?: string;
}
