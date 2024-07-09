export interface ListDeviceGroupRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 指定显示返回结果中的第几页，最小取值1。
     * @example `1`
     */
    "Num": number;
    /**
     * 指定返回结果中每页显示的记录数量，最大值是100。
     * @example `2`
     */
    "Size": number;
    /**
     * 业务链标识。
     * @example `489973087549****`
     */
    "BizChainId": string;
    /**
     * IoT数据源组ProductKey。
     * > 不传则查询业务链下所有的IoT数据源组。
     * @example `hKpHMh2****`
     */
    "ProductKey"?: string;
}
