export interface ConfigNetStatusRequest {
    /**
     * 代播实例的ID。
     * @example `ddos_diversion_public_cn-xxxxxxxxxxxxx`
     */
    "SaleId": string;
    /**
     * 代播实例的网段。
     * @example `192.168.XX.XX/22`
     */
    "Net": string;
    /**
     * 状态。取值：
     * - enable：宣告。
     * - disable：撤销。
     * @example `enable`
     */
    "Status": string;
    /**
     * 网段需要宣告/撤销的区域列表，当列表为空时，表示操作所有网段配置的区域。
     * > 您可以调用[QueryNetList](~~2639086~~)获取网段配置的区域信息。
     */
    "Regions"?: string[];
    /**
     * 代播实例网段的子网段列表。
     */
    "SubNets"?: string[];
}
