export interface GetDownloadFileRequest {
    /**
     * 请求内容。
     * @example `{"xxx";xxx}`
     */
    "Context"?: any;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-npk1u******`
     */
    "IotInstanceId"?: string;
    /**
     * 创建下载任务时返回的长任务ID，请参见[CreateDownloadDataJob](~~445782~~)中的**LongJobId**参数。
     * @example `62d949808bc742187xxxxxx`
     */
    "LongJobId": string;
}
