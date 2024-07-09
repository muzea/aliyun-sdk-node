export interface ListServiceUsagesRequest {
    /**
     * 分页查询时每页行数。其中最大值为100行，默认值为20行。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAWns8w4MmhzeptXVRG0PUEU=`
     */
    "NextToken"?: string;
    /**
     * 过滤器。
     */
    "Filter"?: {
        /**
         * 过滤器名称，可选择一个或者多个名称进行查询。取值范围：
         * - ServiceId：服务ID。
         * - ServiceName：服务名称。
         * - Status：服务状态。
         * - SupplierName：服务商名称。
         * @example `ServiceId`
         */
        Name: string;
        /**
         * 过滤器值列表。N的取值范围：1~10。
         */
        Value: string[];
    }[];
    /**
     * 服务商角色。
     * @example `Supplier`
     */
    "SupplierRole"?: string;
}
