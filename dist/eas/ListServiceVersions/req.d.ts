export interface ListServiceVersionsRequest {
    /**
     * 服务所在区域。
     * @example `cn-hangzhou`
     */
    "ClusterId": string;
    /**
     * 服务名称。如何获取服务名称，请参见[ListServices ](~~412109~~)。
     * @example `test_oss`
     */
    "ServiceName": string;
    /**
     * 请求的页码，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的版本数量，默认为100。
     * @example `10`
     */
    "PageSize"?: number;
}
