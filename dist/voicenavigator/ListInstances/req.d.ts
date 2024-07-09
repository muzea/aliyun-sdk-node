export interface ListInstancesRequest {
    /**
     * 页号
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页条数
     * @example `10`
     */
    "PageSize": number;
    /**
     * nlu类型列表
     * @example `[Managed]`
     */
    "NluServiceTypeListJsonString"?: string;
    "UnionSource"?: string;
    "UnionInstanceId"?: string;
    "Name"?: string;
    "Status"?: string;
    "Number"?: string;
    "InstanceIdListJsonString"?: string;
}
