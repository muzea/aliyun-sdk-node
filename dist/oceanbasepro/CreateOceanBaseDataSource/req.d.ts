export interface CreateOceanBaseDataSourceRequest {
    /**
     * 数据源的名称。
     * @example `source_name`
     */
    "Name": string;
    /**
     * 数据源的类型。
     * @example `OB_MYSQL_VPC`
     */
    "Type": string;
    /**
     * OceanBase 数据库租户的名称。
     * @example `tenant_name`
     */
    "Tenant": string;
    /**
     * OceanBase 数据库租户所在集群的名称。
     * @example `cluster_name`
     */
    "Cluster"?: string;
    /**
     * 用户申请公有云 VPC 的唯一 ID。
     * @example `vpc-bp1d2q3mhg9i23ofi****`
     */
    "VpcId"?: string;
    /**
     * 数据库宿主机的 IP。
     * @example `xxx.xxx.xxx.1`
     */
    "Ip"?: string;
    /**
     * 数据库宿主机 IP 的端口号。
     * @example `2883`
     */
    "Port"?: number;
    /**
     * LogProxy IP。
     * @example `null`
     */
    "LogProxyIp"?: string;
    /**
     * LogProxy 端口。
     * @example `null`
     */
    "LogProxyPort"?: string;
    /**
     * 数据库用户名。
     * @example `user_name`
     */
    "UserName": string;
    /**
     * 数据库用户的密码，需要使用 Base64 编码。
     * @example `cGFzc193b3JK`
     */
    "Password": string;
    /**
     * 数据源的描述信息。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 用于获取 OceanBase 数据库底层服务器的真实地址。
     * @example `http://xxx.xxx.xxx.2:2883/services?Action=ObRootServiceInfo&User_ID=alibaba&UID=ocpmaster&ObRegion=ob_1***29.admin`
     */
    "ConfigUrl"?: string;
    /**
     * 该用户主要用于读取 OceanBase 数据库增量日志和数据库对象结构信息，请在业务集群 sys 租户下创建该用户。
     * @example `user_na***`
     */
    "DrcUserName"?: string;
    /**
     * sys 租户下用户名的密码，需要使用 Base64 编码。
     * @example `pas***`
     */
    "DrcPassword"?: string;
    /**
     * __oceanbase_inner_drc_user 的密码，需要使用 Base64 编码。
     * @example `in***`
     */
    "InnerDrcPassword"?: string;
}
