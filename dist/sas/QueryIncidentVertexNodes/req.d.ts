export interface QueryIncidentVertexNodesRequest {
    /**
     * 待查询的节点ID。
     * > 您可以调用[QueryIncidentTracingDetail](~~QueryIncidentTracingDetail~~)接口获取服务器的UUID。
     * @example `d6d7738a34cc252219866d223c00****`
     */
    "VertexId": string;
    /**
     * 节点Label。 取值包括但不限于：
     * - **process:** 进程
     * - **file:** 文件
     * - **alert:** 告警
     * - **ip:** IP地址
     * - **domain:** 域名
     * @example `process`
     */
    "VertexLabel": string;
    /**
     * 请求的边类型列表。
     */
    "EdgeLabelList"?: string[];
    /**
     * 页码。取值范围：1~最大值。
     * @example `1`
     */
    "Offset"?: number;
    /**
     * 每页条数。取值范围：1~最大值。
     * @example `10`
     */
    "Size"?: number;
}
