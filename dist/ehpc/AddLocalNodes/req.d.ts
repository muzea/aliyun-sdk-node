export interface AddLocalNodesRequest {
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 本地计算节点信息。JSON格式的字符串，包含本地节点的HostName、IpAddress、CpuCores、Memory（单位MB）。
     * @example `[{"HostName":"test-HostName","IpAddress":"192.168.**.**"},{"CpuCores":2,"Memory":1024}]`
     */
    "Nodes": string;
    /**
     * 本地计算节点所加入的调度器队列信息。
     * @example `test.q`
     */
    "Queue"?: string;
}
