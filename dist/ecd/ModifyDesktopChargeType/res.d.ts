export interface ModifyDesktopChargeTypeResponse {
    /**
     * 订单ID。
     * @example `123456789`
     */
    OrderId: string;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 云电脑ID列表。如果一次调用创建了多个云电脑，将返回多个云电脑ID。
     */
    DesktopId: string[];
}
