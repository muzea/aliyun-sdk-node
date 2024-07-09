export interface CreateVirusScanOnceTaskRequest {
    /**
     * 保存资产信息的键值。
     * > 您可以调用[GetAssetSelectionConfig](~~GetAssetSelectionConfig~~)接口获取该参数。
     * @example `845de1ec-4b08-42e1-b564-31321e48xxxx`
     */
    "SelectionKey"?: string;
    /**
     * 病毒扫描的扫描类型。取值：
     * - **system**：系统扫描
     * - **user**：自定义扫描。
     * @example `system`
     */
    "ScanType"?: string;
    /**
     * 如果是自定义扫描需要传输的扫描路径信息。
     */
    "ScanPath"?: string[];
}
