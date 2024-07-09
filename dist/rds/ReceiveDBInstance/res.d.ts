export interface ReceiveDBInstanceResponse {
    /**
     * 切换完成后的灾备实例ID。
     * @example `rm-tr2whku*****`
     */
    GuardDBInstanceId: string;
    /**
     * 请求ID。
     * @example `EFB6083A-7699-489B-8278-C0CB4793A96E`
     */
    RequestId: string;
}
