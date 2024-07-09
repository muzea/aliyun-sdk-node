export interface CreateGetDBListFromAgentTaskRequest {
    /**
     * 备份网关ID，可通过调用[DescribeBackupPlanList](~~437215~~)接口查看。
     * > 此参数为必填项。
     * @example `160813`
     */
    "BackupGatewayId"?: number;
    /**
     * 数据库类型，取值：
     * - **MySQL**
     * - **MSSQL**
     * - **Oracle**
     * - **MariaDB**
     * - **PostgreSQL**
     * - **DRDS**
     * - **MongoDB**
     * - **Redis**
     * @example `MySQL`
     */
    "DatabaseType"?: string;
    /**
     * 备份网关地域ID。
     * @example `cn-hangzhou`
     */
    "SourceEndpointRegion"?: string;
    /**
     * 数据库连接地址。
     * @example `123.0.XX.XX`
     */
    "SourceEndpointIP"?: string;
    /**
     * 数据库连接端口。
     * @example `3306`
     */
    "SourceEndpointPort"?: number;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
     */
    "ClientToken"?: string;
}
