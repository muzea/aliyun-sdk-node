export interface ModifyDatabaseRequest {
    /**
     * 指定要修改的数据库所在堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-72137xe5n01`
     */
    "InstanceId": string;
    /**
     * 指定要修改的数据库所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要修改的数据库ID。
     * @example `11`
     */
    "DatabaseId": string;
    /**
     * 指定修改后数据库所属的网络域的ID。
     * > 您可以调用[ListNetworkDomains ](~~2758827~~)接口获取该参数。
     * @example `2`
     */
    "NetworkDomainId"?: string;
    /**
     * 指定修改后的数据库地址类型。取值：
     * - **Public** ：公网地址
     * - **Private** ：私网地址
     * @example `Public`
     */
    "ActiveAddressType"?: string;
    /**
     * 指定修改后的数据库的私网地址。支持IPv4地址和域名格式。
     * @example `192.168.XX.XX`
     */
    "DatabasePrivateAddress"?: string;
    /**
     * 指定修改后的数据库的公网地址。支持IPv4地址和域名格式。
     * @example `www.example.com`
     */
    "DatabasePublicAddress"?: string;
    /**
     * 指定修改后的数据库端口。
     * @example `5433`
     */
    "DatabasePort"?: string;
    /**
     * 指定修改后的数据库实例名称。
     * @example `pgsql`
     */
    "DatabaseName"?: string;
    /**
     * 指定要修改的数据库实例ID。
     * > **Source**选择**Rds**或**PolarDB**时，该参数为必填项。
     * @example `i-wz99nexqd62z3bvuvpz5`
     */
    "SourceInstanceId"?: string;
    /**
     * 修改后的数据库备注信息。
     * @example `tttttttt`
     */
    "Comment"?: string;
}
