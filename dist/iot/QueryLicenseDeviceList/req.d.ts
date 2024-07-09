export interface QueryLicenseDeviceListRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 对于新版公共实例或企业版实例，实例有ID值，必须传入该ID值，否则调用会失败。
     * - 对于旧版公共实例，实例无ID值，无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-ws4***`
     */
    "IotInstanceId"?: string;
    /**
     * 指定每页返回的记录数量，取值范围：1~100，默认值为20。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * License类型（音视频规格），可取值：**480P**、**720P**。
     * @example `720P`
     */
    "LicenseCode"?: string;
    /**
     * 设备所属产品的**ProductKey**。
     * 您可以在物联网平台控制台或调用接口[QueryProductList](~~69271~~)，查看当前实例下所有产品的信息。
     * @example `es****`
     */
    "ProductKey"?: string;
    /**
     * 指定分页查询的页码。
     * @example `1`
     */
    "PageId"?: number;
    /**
     * 要查询设备的设备ID。
     * 您可调用接口[QueryDevice](~~69905~~)，查询指定产品下所有设备的**IotId**。
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
    /**
     * 设备授权License的开始时间，取值为毫秒值时间戳。
     * @example `1620634297000`
     */
    "StartTime"?: number;
    /**
     * 设备授权License的结束时间，取值为毫秒值时间戳。
     * @example `1620934297000`
     */
    "EndTime"?: number;
}
