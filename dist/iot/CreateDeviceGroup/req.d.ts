export interface CreateDeviceGroupRequest {
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
     * 父组ID。
     * 若要创建的是一级分组，则不传入此参数。
     * @example `SuperGroupId1`
     */
    "SuperGroupId"?: string;
    /**
     * 分组描述。长度不超过100个字符，一个中文汉字占一个字符。
     * @example `Group test`
     */
    "GroupDesc"?: string;
    /**
     * 分组名称。名称长度为4~30个字符，可包含中文汉字、英文字母、数字和下划线（_）。一个中文汉字占两个字符。
     * @example `grouptest`
     */
    "GroupName": string;
}
