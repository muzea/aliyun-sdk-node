export interface ListReservedCapacitiesResponse {
    /**
     * 预付费实例列表。
     */
    reservedCapacities: any[];
    /**
     * 下次查询token。
     * @example `8bj81uI8n****`
     */
    nextToken: string;
}
