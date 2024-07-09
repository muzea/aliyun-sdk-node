export interface ListGatewaysRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-***-v6***`
     */
    "IotInstanceId"?: string;
    /**
     * 网关的在线、离线状态过滤。如未传入此参数，则不限制在线状态。可取值为：
     * - **ONLINE**：在线。
     * - **OFFLINE**：离线。
     * @example `OFFLINE`
     */
    "OnlineState"?: string;
    /**
     * GwEUI模糊过滤。
     * @example `123456`
     */
    "FuzzyGwEui"?: string;
    /**
     * 城市名模糊过滤。
     * @example `CityName`
     */
    "FuzzyCity"?: string;
    /**
     * 网关名称模糊过滤。
     * @example `GatewayName`
     */
    "FuzzyName"?: string;
    /**
     * 网关频段ID过滤。
     * @example `123`
     */
    "FreqBandPlanGroupId"?: number;
    /**
     * 网关的启用、停用状态过滤。如未传入此参数，则不限制启停状态。可取值为：
     * - **true**：启用。
     * - **false**：停用。
     * @example `true`
     */
    "IsEnabled"?: boolean;
    /**
     * 本次查询的起始位置，从0开始。
     * @example `0`
     */
    "Offset": number;
    /**
     * 本次查询的网关数量上限，最大支持200，须大于等于1。
     * @example `2`
     */
    "Limit": number;
    /**
     * 指定排序字段，可取值为**ONLINE_STATE_CHANGED_MILLIS**。
     * @example `ONLINE_STATE_CHANGED_MILLIS`
     */
    "SortingField"?: string;
    /**
     * 配合**SortingField**参数一起使用。
     * - **true**：升序。
     * - **false**：降序。
     * @example `false`
     */
    "Ascending"?: boolean;
}
