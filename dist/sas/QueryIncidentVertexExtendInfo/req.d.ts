export interface QueryIncidentVertexExtendInfoRequest {
    /**
     * 待查询的节点ID。
     * > 您可以调用[QueryIncidentTracingDetail](~~QueryIncidentTracingDetail~~)接口获取服务器的UUID。
     * @example `29872354f741b1b044b8a9b4e2ab****`
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
     * 请求的边类型。取值包括但不限于：
     * - **process_exec_file:** 进程执行文件
     * - **process_connect_ip：** 进程连接IP
     * - **domain_trgger_alert：** 域名出发告警
     * @example `process_connect_ip`
     */
    "RelationType": string;
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
