export interface QueryRecordRequest {
    /**
     * IPC设备所属产品的ProductKey。
     * 您可以在物联网平台控制台**产品**页查看或调用[QueryProductList](~~69271~~)查看当前账号下所有产品的信息。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * IPC设备的设备名称。
     * 您可以在物联网平台控制台的**设备**页查看**DeviceName**。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `camera1`
     */
    "DeviceName"?: string;
    /**
     * IPC设备的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。可调用物联网平台[QueryDeviceDetail](~~69594~~)查询。
     * ><notice> 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**的组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**的组合，则以**IotId**为准。
     * ></notice>
     * @example `C47T6xwp6ms4bNlkHRWCg4****`
     */
    "IotId"?: string;
    /**
     * 码流类型：
     * - **0**（默认）：主码流。
     * - **1**：辅码流。
     * @example `1`
     */
    "StreamType"?: number;
    /**
     * 查询范围开始时间，格式为10位时间戳，单位为秒。
     * @example `1508200012`
     */
    "BeginTime": number;
    /**
     * 查询范围结束时间，格式为10位时间戳，单位为秒。
     * @example `1582420940`
     */
    "EndTime": number;
    /**
     * 录像类型：
     * - **0**：连续录像。
     * - **1**：智能告警事件录像。
     * - **2**（默认）：主动录像。
     * 当该参数值置空时，返回全部录像类型。
     * @example `1`
     */
    "RecordType"?: number;
    /**
     * 指定从返回结果第几页开始显示，默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页显示的条数。默认值为10，最大值为50。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否需要缩略图：
     * - **true**：需要。
     * - **false**（默认）：不需要。
     * @example `true`
     */
    "NeedSnapshot"?: boolean;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页签，查看当前实例的ID。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-060a****`
     */
    "IotInstanceId"?: string;
}
