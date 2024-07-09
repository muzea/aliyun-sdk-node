export interface QueryDeviceSpeechRequest {
    /**
     * 物联网平台为设备颁发的ID，是设备的唯一标识符。调用[QuerySpeechDevice](~~280408~~)可以获取该参数。
     * @example `4de2c367****8c585e5992**`
     */
    "IotId": string;
    /**
     * 实例ID。
     * 必须传入实例ID，否则调用会失败。您可在物联网平台控制台的**实例概览**页面，查看您的实例ID。
     * ><notice>
     * 如果公共实例没有ID，请参见[如何获取实例ID](~~267533~~)。
     * ></notice>
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 指定每页返回数据的最大条数，取值范围：1~50，默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 当前页，从1开始，最大为10000。
     * @example `1`
     */
    "PageId"?: number;
}
