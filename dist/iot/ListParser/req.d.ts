export interface ListParserRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 指定返回结果中每页显示的记录数量，最大值不超过100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 传入解析器名称中任意字符串，根据该字符串检索能匹配的解析器名称。
     * @example `DataParser`
     */
    "SearchName"?: string;
    /**
     * 指定显示返回结果中的第几页，取值范围为1~100。
     * @example `1`
     */
    "CurrentPage": number;
}
