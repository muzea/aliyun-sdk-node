export interface ExecuteNodeToolRequest {
    /**
     * 集群ID。
     * @example `cds-3872l6py****n4u1`
     */
    "ClusterId": string;
    /**
     * nodetool后的命令。
     * @example `settimeout misc`
     */
    "Command": string;
    /**
     * nodetool命令后面所跟参数。
     * @example `10056`
     */
    "Arguments"?: string;
    /**
     * 集群数据中心ID。
     * @example `cn-shanghai-f`
     */
    "DataCenterId": string;
    /**
     * 执行节点的详细信息。
     * @example `core-2`
     */
    "ExecuteNodes"?: string;
}
