export interface QuerySpeechLicenseDeviceListRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 对于新版公共实例或企业版实例，实例有ID值，必须传入该ID值，否则调用会失败。
     * - 对于旧版公共实例，实例无ID值，无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-e3***`
     */
    "IotInstanceId"?: string;
    /**
     * 指定每页返回数据的最大条数，取值范围：1~50，默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 设备所属的产品**ProductKey**。
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 当前页码，从1开始，最大为10000。
     * @example `1`
     */
    "PageId"?: number;
    /**
     * 设备名称查询条件，模糊匹配。
     * @example `test`
     */
    "DeviceName"?: string;
    /**
     * 检查设备分组ID，返回设备是否在该分组下。
     * @example `4de2c367****8c585e5992**`
     */
    "CheckGroupId"?: string;
    /**
     * License状态查询条件。
     * - **NORMAL**：正常。
     * - **EXPIRE**：到期。
     * - **EXPIRING**：即将到期。
     * @example `NORMAL`
     */
    "LicenseStatusList"?: string[];
}
