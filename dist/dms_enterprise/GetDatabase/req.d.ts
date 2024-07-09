export interface GetDatabaseRequest {
    /**
     * 租户ID。您可以通过调用[GetUserActiveTenant](~~198073~~)接口获取该参数。
     * @example `-1`
     */
    "Tid"?: number;
    /**
     * 数据库连接地址。
     * @example `192.168.XX.XX`
     */
    "Host": string;
    /**
     * 数据库的连接端口。
     * @example `3306`
     */
    "Port": number;
    /**
     * 数据库Sid。
     * >数据库Sid是Oracle数据库的唯一标识符。当建立一个数据库时，系统将自动赋予一个初始ID。
     * @example `test_sid`
     */
    "Sid"?: string;
    /**
     * 数据库名称。
     *
     * @example `mysql`
     */
    "SchemaName": string;
}
