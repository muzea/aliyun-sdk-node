export interface GetMcuLvsIpResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `xxxx`
     */
    Message: string;
    /**
     * IP信息。格式为List类型的JSON字符串。
     * @example `{ "xmculvs":[ 0:{ "port":00 "ip":"0.0.0.0" "name":"lvs1" } ]}`
     */
    Data: string;
}
