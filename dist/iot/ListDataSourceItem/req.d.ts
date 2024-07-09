export interface ListDataSourceItemRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-0pp1n8t***`
     */
    "IotInstanceId"?: string;
    /**
     * 指定返回结果中每页显示的记录数量，取值范围为1~100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 数据源ID。
     * 调用[ListParserDataSource](~~432676~~)接口，可查看当前实例下所有数据源ID。
     * @example `1001`
     */
    "DataSourceId": number;
    /**
     * 指定显示返回结果中的第几页，取值范围为1~100,000。
     * @example `1`
     */
    "Page": number;
    /**
     * 传入Topic值中任意一段字符串，根据该字符串检索能匹配的Topic。
     * @example `thing`
     */
    "SearchName"?: string;
}
