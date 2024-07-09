export interface StructureAddressResponse {
    /**
     * RequestId
     * @example `3542CCCD-A58D-4D46-9772-CC214D2D1E32`
     */
    RequestId: string;
    /**
     * json格式数据
     * @example `{"structure":"prov=浙江省\tcity=杭州市\troad=文一西路\troadNo=969号","time_used":{"rt":{"structure":"0.006234884262084961"},"start":"1589801057.2344782"},"status":"OK"}`
     */
    Data: string;
}
