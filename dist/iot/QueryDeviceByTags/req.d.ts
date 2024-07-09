export interface QueryDeviceByTagsRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 指定从返回结果中的第几页开始显示。默认值是1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定返回结果中每页显示的设备记录数量，最大值是50。默认值是10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 设备标签的值。
         * @example `101`
         */
        TagValue: string;
        /**
         * 设备标签的Key。
         * @example `room`
         */
        TagKey: string;
    }[];
}
