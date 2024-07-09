export interface ListProjectLabelsResponse {
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 总记录数
     * @example `30`
     */
    total: number;
    /**
     * 返回结果
     */
    result: {
        /**
         * 类标ID，唯一标识
         * @example `f2bf0e0b4ce34a348b2d971c69a1d11f`
         */
        id: string;
        /**
         * 类标名称
         * @example `优化`
         */
        name: string;
        /**
         * 类标颜色
         * @example `#A16AD7`
         */
        color: string;
        /**
         * 类标描述
         * @example `已有内容的优化或重构`
         */
        description: string;
        /**
         * 关联的评审中的合并请求数量
         * @example `1`
         */
        openMergeRequestsCount: number;
    }[];
}
