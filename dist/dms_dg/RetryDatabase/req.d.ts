export interface RetryDatabaseRequest {
    /**
     * 网关ID。
     * @example `dg-nmz841r7b681****`
     */
    "GatewayId": string;
    /**
     * 通过网关所在宿主机去访问数据库的地址。
     * @example `127.0.XX.XX`
     */
    "Host": string;
    /**
     * 通过网关所在宿主机去访问数据库的端口。
     * @example `3306`
     */
    "Port": number;
    /**
     * 数据库类型。
     * @example `MYSQL`
     */
    "DbType"?: string;
    /**
     * 访问数据库所用的用户名。
     * @example `test`
     */
    "DbUserName"?: string;
    /**
     * 访问数据库所用的密码。
     * @example `HongRui****`
     */
    "DbPassword"?: string;
    /**
     * 数据库描述。
     * @example `测试库`
     */
    "DbDescription"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "DbName"?: string;
    /**
     * 该参数值由客户端生成，用于确保请求的幂等性。该参数值在不同请求间是唯一的，并且区分大小写，长度不超过64个ASCII字符。
     * @example `XXXXX`
     */
    "ClientToken"?: string;
}
