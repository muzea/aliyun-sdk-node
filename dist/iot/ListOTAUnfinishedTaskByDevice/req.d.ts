export interface ListOTAUnfinishedTaskByDeviceRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-c3j***`
     */
    "IotInstanceId"?: string;
    /**
     * OTA模块名称。
     * - 传入时，表示查询指定模块的升级任务。
     * - 不传入时，表示查询所有模块的升级任务。
     * @example `WifiConfigModify`
     */
    "ModuleName"?: string;
    /**
     * 设备所属产品的ProductKey。
     * ><notice>如果传入该参数，需同时传入**DeviceName**。
     *    ></notice>
     * @example `a19mzPZ****`
     */
    "ProductKey"?: string;
    /**
     * 设备名称。
     * ><notice>如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 查询单个指定升级状态下的设备升级作业。
     * - **CONFIRM**：待确认。
     * - **QUEUED**：待推送。
     * - **NOTIFIED**：已推送。
     * - **IN_PROGRESS**：升级中。
     * > 单次调用本接口，仅可传入一个状态进行查询。该参数与**TaskStatusList**二选一使用。
     * @example `CONFIRM`
     */
    "TaskStatus"?: string;
    /**
     * 要查询设备的设备ID。
     * ><notice>如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**的组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**的组合，则以**IotId**为准。
     * ></notice>
     * @example `TfmUAeJjQQhCPH84UVNn0010c6****`
     */
    "IotId"?: string;
    /**
     * 查询多个指定升级状态下的设备升级作业。
     * - **CONFIRM**：待确认。
     * - **QUEUED**：待推送。
     * - **NOTIFIED**：已推送。
     * - **IN_PROGRESS**：升级中。
     * > 单次调用本接口，可传入多个状态进行查询。该参数与**TaskStatus**二选一使用。
     * @example `QUEUED`
     */
    "TaskStatusList"?: string[];
}
