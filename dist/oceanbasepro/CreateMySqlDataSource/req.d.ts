export interface CreateMySqlDataSourceRequest {
    /**
     * 数据源的名称。
     * @example `source_name`
     */
    "Name": string;
    /**
     * 类型，包括 INTERNET、VPC、RDS、PolarDB 和 DG。
     * @example `VPC`
     */
    "Type": string;
    /**
     * 用户申请公有云 VPC 的唯一 ID。
     * @example `vpc-bp1d2q3mhg9i23ofi****`
     */
    "VpcId"?: string;
    /**
     * 数据库实例 ID。
     * @example `rm-t4****`
     */
    "InstanceId"?: string;
    /**
     * DG 网关 ID。
     * @example `dg-x****`
     */
    "DgInstanceId"?: string;
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
     * 数据库的名称。填写后，仅对该数据库进行数据迁移或数据同步。
     * @example `test`
     */
    "Schema"?: string;
    /**
     * 用于数据迁移或数据同步的数据库用户的名称。
     * @example `user_name`
     */
    "UserName": string;
    /**
     * 数据库用户的密码，需要使用 Base64 编码。
     * @example `cGFzc193b3JK`
     */
    "Password": string;
    /**
     * 数据源的备注信息，不能超过 128 个字符。
     * @example `test`
     */
    "Description"?: string;
    "UseSsl"?: boolean;
}
