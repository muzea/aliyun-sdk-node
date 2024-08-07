export interface CreateParserDataSourceRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-w2****`
     */
    "IotInstanceId"?: string;
    /**
     * 数据源名称，支持中文、英文字母、日文、数字、下划线（_）和短划线（-），长度为1~30个字符，一个中文及日文占2个字符。
     * @example `DataSource`
     */
    "Name": string;
    /**
     * 数据源描述信息。
     * @example `设备数据。`
     */
    "Description"?: string;
}
