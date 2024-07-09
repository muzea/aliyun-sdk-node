export interface SetProductCertInfoRequest {
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
     * 产品的**ProductKey**。
     * @example `aS2dewS****`
     */
    "ProductKey": string;
    /**
     * 证书颁发模式。
     * - **1**：由物联网平台颁发X.509证书。
     * - **3**：由第三方平台颁发X.509证书。
     * @example `1`
     */
    "IssueModel": number;
}
