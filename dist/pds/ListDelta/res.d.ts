export interface ListDeltaResponse {
    /**
     * 增量信息列表
     */
    items: {
        /**
         * 文件id
         * @example `122fb09598ae66777c7040109a16f49381f6abe2`
         */
        file_id: string;
        /**
         * 执行的操作。具体包括以下操作：
         * - create
         * - overwrite
         * - delete
         * - update
         * - move
         * -  trash
         * -  restore
         * - rename
         * @example `create`
         */
        op: string;
        /**
         * 涉及的文件信息
         */
        file: any;
    }[];
    /**
     * 是否还有更多信息。
     * @example `true`
     */
    has_more: boolean;
    /**
     * 游标
     * @example `1WQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
     */
    cursor: string;
}
