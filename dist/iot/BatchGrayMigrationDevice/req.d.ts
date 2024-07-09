export interface BatchGrayMigrationDeviceRequest {
    /**
     * 设备所属产品的**ProductKey**。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 待灰度迁移的设备名称列表。
     * 单次调用本接口，最多传入10个设备名称。超出10个的设备名称会被直接丢弃。
     * @example `light`
     */
    "DeviceNames": string[];
}
