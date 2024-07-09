export interface ListLayersResponse {
    /**
     * 层的列表。
     */
    layers: any[];
    /**
     * 剩余列表的起始层名，用来返回更多结果。
     * @example `next-layer-name`
     */
    nextToken: string;
}
