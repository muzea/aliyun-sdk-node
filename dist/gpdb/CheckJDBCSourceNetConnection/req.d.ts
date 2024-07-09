export interface CheckJDBCSourceNetConnectionRequest {
    /**
     * 实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `gp-xxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * jdbc连接串。
     * @example `jdbc:mysql://rm-xxx.mysql.rds.aliyuncs.com:3306/testadmin`
     */
    "JdbcConnectionString": string;
}
