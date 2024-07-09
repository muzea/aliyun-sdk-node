export interface QueryConsumerGroupListRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 指定返回结果中每页显示的消费组数量，最小值为1，最大值为1000。
     * @example `2`
     */
    "PageSize": number;
    /**
     * 指定显示返回结果中的第几页，最小值为1。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 是否使用模糊查询。可选值：
     * - **true**：使用模糊查询，需指定**GroupName**参数。
     * - **false**：查询该用户的所有消费组。
     * 默认为**false**。
     * @example `false`
     */
    "Fuzzy"?: boolean;
    /**
     * 模糊查询时要查询的消费组名称，当**Fuzzy**取值为**true**时传入。
     * @example `A类消费组`
     */
    "GroupName"?: string;
    "Type"?: string;
    "SubBizCode"?: string;
}
