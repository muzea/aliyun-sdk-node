export interface QuerySpeechPushJobRequest {
    /**
     * 实例ID。
     * 必须传入实例ID，否则调用会失败。您可在物联网平台控制台的**实例概览**页面，查看您的实例ID。
     * ><notice>
     * 如果公共实例没有ID，请参见[如何获取实例ID](~~267533~~)。
     * ></notice>
     * @example `iot-060*****`
     */
    "IotInstanceId"?: string;
    /**
     * 项目ID，是项目的唯一标识，您可以通过[项目管理控制台](https://iot.console.aliyun.com/things-service/projects)获取项目ID。
     * @example `0Ykj************************Av0I`
     */
    "ProjectCode": string;
    /**
     * 推送任务的模式，不传则查询所有模式。
     * - **SINGLE_DEVICE**：单设备推送。
     * - **ALL**：全量设备推送。
     * - **GROUP_DEVICE**：分组设备推送。
     * @example `ALL`
     */
    "PushMode"?: string;
    /**
     * 推送任务ID，调用[PushSpeech](~~217573~~)成功后返回的**Data**字段为推送任务ID。
     * @example `tBUm***********************QPGT`
     */
    "JobCode"?: string;
    /**
     * 指定每页返回数据的最大条数，取值范围：1~50，默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 当前页，从1开始，最大为10000。
     * @example `1`
     */
    "PageId"?: number;
    /**
     * 查询语料推送任务的状态列表，不传则查询所有状态。
     * - **RUNNING**：运行中。
     * - **CANCEL**：取消。
     * - **SUCCESS**：成功。
     * - **TIMEOUT**：超时。
     * @example `RUNNING`
     */
    "StatusList"?: string[];
}
