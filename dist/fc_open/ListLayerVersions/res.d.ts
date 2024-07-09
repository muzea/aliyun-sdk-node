export interface ListLayerVersionsResponse {
    /**
     * 层版本列表。
     */
    layers: any[];
    /**
     * 剩余列表起始版本号。
     * @example `21`
     */
    nextVersion: number;
}
