export interface GenerateMergedTableResponse {
    /**
     * 请求ID
     * @example `ABCDEFGH`
     */
    requestId: string;
    /**
     * 返回结果
     */
    result: {
        /**
         * 主键
         * @example `-`
         */
        primaryKey: string;
        /**
         * 合并后的表
         * @example `-`
         */
        mergeTable: any;
        /**
         * 需要合并的表
         * @example `-`
         */
        fromTable: any;
    };
}
