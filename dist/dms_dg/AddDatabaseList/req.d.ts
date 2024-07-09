export interface AddDatabaseListRequest {
    /**
     * 待添加数据库的信息。
     * @example `[{"host":"127.0.0.1","port":"3306","gatewayId":"dg-xsdasdasdas****"}]`
     */
    "DatabaseString": string;
    /**
     * 该参数值由客户端生成，用于确保请求的幂等性。该参数值在不同请求间是唯一的，并且区分大小写，长度不超过64个ASCII字符。
     * @example `ETnLKlblzczshOTUbOCzxxxx`
     */
    "ClientToken"?: string;
}
