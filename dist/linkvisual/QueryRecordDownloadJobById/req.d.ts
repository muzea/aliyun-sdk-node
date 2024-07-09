export interface QueryRecordDownloadJobByIdRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页签，查看当前实例的ID。
     * @example `Iot-r******`
     */
    "IotInstanceId": string;
    /**
     * 云端录像下载任务的ID。
     * @example `w2s******`
     */
    "JobId": string;
}
