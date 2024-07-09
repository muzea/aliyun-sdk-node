export interface DeleteDataSourceItemRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 数据源Topic的ID。您可调用接口[ListDataSourceItem](~~421072~~)，查询指定数据源下的Topic列表，获取**DataSourceItemId**。
     * @example `129322`
     */
    "DataSourceItemId": number;
    /**
     * 数据源ID。您可调用接口[ListParserDataSource](~~432676~~)，查询数据源列表，获取**DataSourceId**。
     * @example `1001`
     */
    "DataSourceId": number;
}
