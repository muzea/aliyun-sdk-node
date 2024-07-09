export interface ListReceivedFileResponse {
    /**
     * 返回的文件列表
     */
    items: any[];
    /**
     * 本次返回记录的断点，可用于下次继续查询
     * @example `eym***`
     */
    next_marker: string;
}
