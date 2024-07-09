export interface AddHDMInstanceRequest {
    /**
     * 备用参数。
     * @example `None`
     */
    "__context"?: string;
    /**
     * 实例所属的数据库产品，取值：
     * - **RDS**：云实例。
     * - **ECS**：ECS自建实例。
     * - **IDC**：非公有云自建实例。
     * > IDC为用户数据中心。
     * @example `ECS`
     */
    "InstanceArea": string;
    /**
     * 实例ID。
     * @example `rm-2ze1jdv45i7l6****`
     */
    "InstanceId"?: string;
    /**
     * 待接入实例的内网连接地址。
     * @example `rm-2ze1jdv45i7l6****.mysql.rds.aliyuncs.com`
     */
    "Ip"?: string;
    /**
     * 实例的内网连接端口。
     * @example `3306`
     */
    "Port"?: string;
    /**
     * 数据库引擎，取值：
     * - **MySQL**
     * - **PostgreSQL**
     * - **SQLServer**
     * - **PolarDBMySQL**
     * - **PolarDBPostgreSQL**
     * - **Redis**
     * - **MongoDB**
     * - **PolarDBOracle**
     * - **PolarDBX**
     * @example `MySQL`
     */
    "Engine"?: string;
    /**
     * 用户名。
     * @example `test****`
     */
    "Username"?: string;
    /**
     * 用户名的密码。
     * @example `122****`
     */
    "Password"?: string;
    /**
     * 实例名称。
     * @example `yuecq--test****`
     */
    "InstanceAlias"?: string;
    /**
     * 实例的网络类型。
     * @example `VPC`
     */
    "NetworkType"?: string;
    /**
     * VPC ID。
     * @example `vpc-m5e666n89m2bx8jar****`
     */
    "VpcId"?: string;
    /**
     * 实例所属的地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 备用参数。
     * @example `None`
     */
    "FlushAccount"?: string;
}
