export interface ListThingModelVersionRequest {
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
     * 产品的ProductKey。
     * 可以在物联网平台控制台产品页查看，或调用[QueryProductList](~~69271~~)查看ProductKey的取值。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
}
