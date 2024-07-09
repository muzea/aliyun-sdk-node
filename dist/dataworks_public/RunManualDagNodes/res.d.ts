export interface RunManualDagNodesResponse {
    /**
     * 手动业务流程运行Dag的实例ID。您可以通过接口和该DagId查询此次手动业务流程运行的内部节点实例的详细信息和状态。
     * @example `700000123123141`
     */
    DagId: number;
    /**
     * 请求唯一标识。
     * @example `AASFDFSDFG-DFSDF-DFSDFD-SDFSDF`
     */
    RequestId: string;
}
