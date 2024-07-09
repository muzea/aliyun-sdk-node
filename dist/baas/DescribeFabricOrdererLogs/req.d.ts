export interface DescribeFabricOrdererLogsRequest {
    /**
     * 联盟ID
     * @example `consortium-test-iyuso3g7****`
     */
    "ConsortiumId": string;
    /**
     * 排序节点名称
     * @example `orderer1`
     */
    "OrdererName": string;
    /**
     * 显示行数
     * @example `50`
     */
    "Lines"?: string;
}
