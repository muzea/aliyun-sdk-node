export interface UpdateProductRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 描述产品信息。长度不超过100个字符。一个中文算一个字符。
     * @example `第二代路灯产品。`
     */
    "Description"?: string;
    /**
     * 产品的**ProductKey**，物联网平台为产品颁发的全局唯一标识符。
     * 您可以在物联网平台控制台或调用[QueryProductList](~~69271~~)接口，查看当前账号下所有产品的信息。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 修改后的产品名称。
     * 产品名称长度为4~30个字符，可以包含中文、英文字母、数字和下划线（_）。一个中文汉字算2个字符。
     * ><notice> 产品名称在当前实例下需保持唯一。
     * ></notice>
     * @example `路灯`
     */
    "ProductName": string;
}
