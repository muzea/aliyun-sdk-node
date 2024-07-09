export interface MergeMergeRequestResponse {
    /**
     * 请求ID
     * @example `9ED5E382-3A58-51E4-8A81-CE25D1756025`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * 合并请求是否成功
         * @example `true`
         */
        result: boolean;
        /**
         * 合并版本（Commit SHA）
         * @example `1a072f5367c21f9de3464b8c0ee8546e47764d2d`
         */
        mergedRevision: string;
        /**
         * 合并请求业务ID
         * @example `bca90244c4b749e0b109df52ac0eb570`
         */
        bizId: string;
        /**
         * 代码库ID
         * @example `2369234`
         */
        projectId: number;
        /**
         * 合并请求局部ID，表示代码库下的第几个合并请求
         * @example `2`
         */
        localId: number;
    };
}
