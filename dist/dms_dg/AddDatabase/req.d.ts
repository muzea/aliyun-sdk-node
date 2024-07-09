export interface AddDatabaseRequest {
    /**
     * 网关ID。
     * @example `dg-8d9bqu1030m****`
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
     * @example `test_usr`
     */
    "DbUserName"?: string;
    /**
     * 访问数据库所用的密码。
     * > 仅用于验证数据库是否可以连接成功，不做任何其他工作。
     * @example `1234!2#%A***`
     */
    "DbPassword"?: string;
    /**
     * 数据库的描述。
     * @example `测试`
     */
    "DbDescription"?: string;
    /**
     * 数据库所在地域。
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
     * @example `ETnLKlblzczshOTUbOCzxxxx`
     */
    "ClientToken"?: string;
}
