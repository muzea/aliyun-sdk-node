export interface QueryCertUrlByApplyIdRequest {
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 要查询的申请批次ID。申请批次ID可在[BatchRegisterDeviceWithApplyId](~~69514~~)和[BatchRegisterDevice](~~69473~~)接口返回结果中查看。
     * @example `1234567`
     */
    "ApplyId": number;
}
