export interface CreateDesktopsResponse {
    /**
     * 订单ID。
     * > 当请求参数ChargeType取值为PrePaid时，返回该参数。
     * @example `123456789`
     */
    OrderId: string;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 云电脑ID返回集合信息，如果一次调用创建了多个云电脑，将返回多个云电脑ID。
     */
    DesktopId: string[];
}
