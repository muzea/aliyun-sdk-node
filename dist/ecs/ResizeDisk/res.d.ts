export interface ResizeDiskResponse {
    /**
     * 生成的订单ID。
     * > 仅在扩容包年包月云盘时会返回订单ID。
     * @example `20413515388****`
     */
    OrderId: string;
    /**
     * 请求ID。
     * @example `F3CD6886-D8D0-4FEE-B93E-1B732396****`
     */
    RequestId: string;
}
