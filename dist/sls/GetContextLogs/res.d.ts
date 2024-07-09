export interface GetContextLogsResponse {
    /**
     * 返回的总日志条数，包含请求参数中所指定的起始日志。
     * @example `201`
     */
    total_lines: number;
    /**
     * 向前查询到的日志条数。
     * @example `100`
     */
    back_lines: number;
    /**
     * 向后查询到的日志条数。
     * @example `100`
     */
    forward_lines: number;
    /**
     * 查询的结果是否完整。
     * - Complete：查询已经完成，返回结果为完整结果。
     * - Incomplete：查询已经完成，返回结果为不完整结果，需要重复请求以获得完整结果。
     * @example `Complete`
     */
    progress: string;
    /**
     * 获取到的日志。
     */
    logs: any[];
}
