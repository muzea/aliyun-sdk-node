export interface CreateDBInstanceResponse {
    /**
     * 创建的实例名称。
     * @example `pxc-*********`
     */
    DBInstanceName: string;
    /**
     * 请求ID。
     * @example `9B2F3840-5C98-475C-B269-2D5C3A31797C`
     */
    RequestId: string;
    /**
     * 订单号。
     * @example `12345`
     */
    OrderId: string;
}
