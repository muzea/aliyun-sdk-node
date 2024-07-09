export interface AddDataForApiSourceRequest {
    /**
     * 实例ID。<props="china"><ph>您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。</ph></props>
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * <props="china">实例的更多信息，请参见[如何获取实例ID](~~267533~~)。</props>
     * @example `iot-0pp1n*****`
     */
    "IotInstanceId": string;
    /**
     * API数据源ID，即**API ID**。<props="china"><ph>您可在物联网平台控制台的**数据分析** > **数据采集** > **数据源**页面，查看API数据源的**API ID**。</ph></props>
     * <props="china">API数据源的更多信息，请参见[配置API数据源](~~307003~~)。</props>
     * @example `cxatswiniekxw***`
     */
    "ApiId": string;
    /**
     * 上传到物联网平台的数据内容。JSON格式。
     * JSON中必须包含**ts**字段，用来表示数据产生的时间点（unix 毫秒精度的时间戳）。
     * @example `{"key":"value","ts":16376582*****}`
     */
    "Content": string;
}
