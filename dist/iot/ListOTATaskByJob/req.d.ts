export interface ListOTATaskByJobRequest {
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
     * 指定返回结果中，每页显示的设备升级作业数量。最大限制：100。
     * ><notice>**CurrentPage**与**PageSize**相乘的值必须小于或等于100,000。
     * ></notice>
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 传入此参数，则查询指定升级状态下的设备升级作业。
     * - **CONFIRM**：待确认。
     * - **QUEUED**：待推送。
     * - **NOTIFIED**：已推送。
     * - **IN_PROGRESS**：升级中。
     * - **SUCCEEDED**：升级成功。
     * - **FAILED**：升级失败。
     * - **CANCELED**：已取消。
     * 不传入此参数，则查询指定升级批次下的全部设备升级作业。
     * @example `FAILED`
     */
    "TaskStatus"?: string;
    /**
     * 升级批次ID，升级批次的唯一标识符。您调用[CreateOTAVerifyJob](~~147480~~)、[CreateOTAStaticUpgradeJob](~~147496~~)或[CreateOTADynamicUpgradeJob](~~147887~~)返回的**JobId**。您也可以在物联网平台控制台上OTA升级包的**升级包详情**页查看。
     * @example `7glPHmaDYLAYMD1HHutT02****`
     */
    "JobId": string;
    /**
     * 指定从返回结果中的第几页开始显示。页数从1开始排序。
     * ><notice>**CurrentPage**与**PageSize**相乘的值必须小于或等于100,000。
     * ></notice>
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定查询的设备名称列表。
     * > - 最多传入设备名称50个。
     * -  如果传入该参数，则无需传入**PageSize**和**CurrentPage**。如果您同时传入**DeviceNames.N**、**PageSize**和**CurrentPage**，则以**DeviceNames.N**为准。
     * @example `device1`
     */
    "DeviceNames"?: string[];
}
