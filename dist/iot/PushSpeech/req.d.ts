export interface PushSpeechRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页签，查看当前实例的ID。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 推送模式。
     * - **ALL**：全量设备推送。
     * - **SINGLE_DEVICE**：单设备推送。
     * - **GROUP_DEVICE**：分组设备推送。
     * @example `SINGLE_DEVICE`
     */
    "PushMode": string;
    /**
     * 分组ID，当**推送模式**选择为**分组设备**时，该项必填。
     * 您可以在**设备管理** > **分组管理**中获取分组ID，
     * @example `4de2c367****8c585e5992**`
     */
    "GroupId"?: string;
    /**
     * 设备ID。当**推送模式**选择为**单个设备**时，该参数与**ProductKey**、**DeviceName**组合二选一必传。
     * > 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * @example `4de2c367****8c585e5992**`
     */
    "IotId"?: string;
    /**
     * 项目ID，是项目的唯一标识，您可以通过[项目管理控制台](https://iot.console.aliyun.com/things-service/projects)获取项目ID。
     * @example `4de2c367****8c585e5992**`
     */
    "ProjectCode": string;
    /**
     * 设备名称。
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 产品的唯一标识。
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 需要推送的语料ID列表。该参数可以通过[QuerySpeechList](~~217576~~)查询获取。
     * N为整数，取值范围：1~100，表示每次最多推送100条语料。
     * @example `4de2c367****8c585e5992**`
     */
    "SpeechCodeList": string[];
}
