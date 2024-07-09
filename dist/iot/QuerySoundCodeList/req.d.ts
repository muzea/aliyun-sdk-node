export interface QuerySoundCodeListRequest {
    /**
     * 实例ID。<props="china"><ph>您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。</ph></props>
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * <props="china">实例的更多信息，请参见[如何获取实例ID](~~267533~~)。</props>
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 指定每页返回的语料条数，取值范围：1~50，默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 指定显示返回结果中的第几页。取值范围1~10,000，默认值为1。
     * @example `1`
     */
    "PageId"?: number;
}
