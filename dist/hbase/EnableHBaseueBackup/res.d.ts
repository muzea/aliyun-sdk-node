export interface EnableHBaseueBackupResponse {
    /**
     * 请求Id。
     * @example `15272D5D-46E8-4400-9CC8-A7E7B589F575`
     */
    RequestId: string;
    /**
     * 订单Id。
     * @example `1449xxx`
     */
    OrderId: string;
    /**
     * 开通的BDS备份服务的集群Id。
     * @example `bds-m5e54q06ceyhxxxx`
     */
    ClusterId: string;
}
