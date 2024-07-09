export interface QueryNetListRequest {
    /**
     * 代播实例的ID。
     * @example `ddos_diversion_public_cn-xxxxxxxxxxxxx`
     */
    "SaleId"?: string;
    /**
     * 代播实例的网段。
     * > 代播实例没有扩展网段时，表示实例的网段。代播实例有扩展网段时，表示扩展的网段，与MainNet参数配合使用。
     * @example `192.168.XX.XX/24`
     */
    "Net"?: string;
    /**
     * 调度模式。取值：
     * - manual : 人工。
     * - netflow-auto：netflow自动调度。
     * @example `netflow-auto`
     */
    "Mode"?: string;
    /**
     * 具有扩展网段的代播实例的主网段。如果查询的代播实例没有扩展网段，此参数为空。
     * @example `192.168.XX.XX/22`
     */
    "MainNet"?: string;
    /**
     * 页码。 默认值：1。
     * @example `1`
     */
    "Page"?: number;
    /**
     * 数量。默认值：100。
     * @example `100`
     */
    "Num"?: number;
}
