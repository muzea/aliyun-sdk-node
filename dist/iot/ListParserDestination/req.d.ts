export interface ListParserDestinationRequest {
    /**
     * 待查询数据目的配置是否为转发错误操作数据，即转发流转到其他云产品失败且重试失败的数据。
     * - **true**：是转发错误操作数据。
     * - **false**（默认）：不是转发错误操作数据，而是正常转发操作。
     * @example `false`
     */
    "IsFailover"?: boolean;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-2w****`
     */
    "IotInstanceId"?: string;
    /**
     * 解析器ID。您可调用接口[ListParsers](~~429046~~)，查询解析器列表，获取**ParserId**。
     * @example `1002`
     */
    "ParserId": number;
}
