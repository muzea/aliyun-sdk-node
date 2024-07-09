export interface ListMergeRequestLabelsResponse {
    /**
     * 请求ID
     * @example `4D6AF7CC-B43B-5454-86AB-023D25E44868`
     */
    requestId: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `Invalid.IdNotFound`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 返回列表
     */
    result: {
        /**
         * 类标ID
         * @example `f2bf0e0b4ce34a348b2d971c69a1d11f`
         */
        id: string;
        /**
         * 类标名称
         * @example `优化`
         */
        name: string;
        /**
         * 类标描述
         * @example `已有内容的优化或重构`
         */
        description: string;
        /**
         * 类标颜色
         * @example `#A16AD7`
         */
        color: string;
    }[];
}
