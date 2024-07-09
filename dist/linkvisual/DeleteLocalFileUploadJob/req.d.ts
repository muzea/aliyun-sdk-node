export interface DeleteLocalFileUploadJobRequest {
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot-cn-n6w1y59****`
     */
    "IotInstanceId"?: string;
    /**
     * 本地录像上传任务ID，由创建本地录像上传任务[CreateLocalFileUploadJob](~~363002~~)生成。
     * @example `1ec1a2****d0435fbc0****34f6f139d`
     */
    "JobId": string;
}
