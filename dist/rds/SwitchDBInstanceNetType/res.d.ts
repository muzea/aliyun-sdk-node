export interface SwitchDBInstanceNetTypeResponse {
    /**
     * 切换后的数据库连接地址。
     * @example `new****.mysql.rds.aliyuncs.com`
     */
    NewConnectionString: string;
    /**
     * 请求ID。
     * @example `65BDA532-28AF-4122-AA39-B382721EEE64`
     */
    RequestId: string;
    /**
     * 切换前的数据库连接地址。
     * @example `rm-bp1****.mysql.rds.aliyuncs.com`
     */
    OldConnectionString: string;
}
