export interface ListRecentlyRecycledDirectoriesResponse {
    /**
     * 请求ID。
     * @example `9E15E394-38A6-457A-A62A-D9797C9A****`
     */
    RequestId: string;
    /**
     * 下一页标识。
     * 如果一次查询结果并没有完整返回所有的目录，则返回NextToken不为空。您可以在查询中上传正确的NextToken继续查询。
     * @example `1256****25`
     */
    NextToken: string;
    /**
     * 最近执行过删除操作的目录信息。
     */
    Entries: {
        /**
         * 目录ID。
         * @example `04***08`
         */
        FileId: string;
        /**
         * 目录的绝对路径。
         * @example `/a/b`
         */
        Path: string;
        /**
         * 目录的名称。
         * @example `b`
         */
        Name: string;
        /**
         * 该目录最近一次执行删除操作的时间。
         * @example `2021-05-30T10:08:08Z`
         */
        LastDeleteTime: string;
    }[];
}
