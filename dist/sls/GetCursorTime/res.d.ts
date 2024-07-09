export interface GetCursorTimeResponse {
    /**
     * Cursor的服务端时间。Unix时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1554260243`
     */
    cursor_time: string;
}
