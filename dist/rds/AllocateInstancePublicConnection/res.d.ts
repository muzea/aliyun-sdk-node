export interface AllocateInstancePublicConnectionResponse {
    /**
     * 实例ID。
     * @example `rm-bp1****`
     */
    DbInstanceName: string;
    /**
     * 请求ID。
     * @example `65BDA532-28AF-4122-AA39-B382721EEE64`
     */
    RequestId: string;
    /**
     * 数据库连接地址。
     * @example `test****.mysql.rds.aliyuncs.com`
     */
    ConnectionString: string;
}
