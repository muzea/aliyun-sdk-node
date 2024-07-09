export interface QueryOTAJobRequest {
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
     * 升级批次ID。
     * 您调用[CreateOTAVerifyJob](~~147480~~)、[CreateOTAStaticUpgradeJob](~~147496~~)或[CreateOTADynamicUpgradeJob](~~147887~~)创建升级任务批次后，返回的**JobId**。您也可以在物联网平台控制台的**升级包详情**页面查看。
     * @example `wahVIzGkCMuAUE2gDERM02****`
     */
    "JobId": string;
}
