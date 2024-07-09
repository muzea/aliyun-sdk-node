export interface QuerySpeechDeviceRequest {
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
     * 项目ID，是项目的唯一标识，您可以通过[项目管理控制台](https://iot.console.aliyun.com/things-service/projects)获取项目ID。
     * @example `4de2c367****8c585e5992**`
     */
    "ProjectCode": string;
    /**
     * 设备的可用空间，单位KB，取值为任意正数。
     * > **AvailableSpaceScope**字段必须同时传入才会生效。
     * @example `500`
     */
    "AvailableSpace"?: string;
    /**
     * 设备可用空间的查询条件。
     * - **greater**：大于。
     * - **smaller**：小于。
     * - **equal**：等于。
     * 示例：**AvailableSpace**设置为**500**，**AvailableSpaceScope**设置为**smaller**，则返回可用空间小于500KB的设备列表。
     * @example `smaller`
     */
    "AvailableSpaceScope"?: string;
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
    /**
     * 设备名称查询条件，最左前缀匹配。
     * @example `test`
     */
    "DeviceName"?: string;
}
