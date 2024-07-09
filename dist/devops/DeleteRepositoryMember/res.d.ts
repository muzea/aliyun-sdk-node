export interface DeleteRepositoryMemberResponse {
    /**
     * 请求ID
     * @example `0E1BCF81-51E6-59D4-8D55-FF945111127A`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
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
         * 主键，无业务意义
         * @example `30815`
         */
        id: number;
        /**
         * 创建时间
         * @example `2022-03-12 12:00:00`
         */
        createAt: string;
        /**
         * 更新时间
         * @example `2022-03-12 12:00:00`
         */
        updateAt: string;
        /**
         * 来源ID，指代码库或代码组ID
         * @example `2080398`
         */
        sourceId: number;
        /**
         * 关联源的类型
         * 可选值：Project / Namespace
         * @example `Project`
         */
        sourceType: string;
        /**
         * Codeup用户ID
         * @example `19280`
         */
        userId: number;
        /**
         * 权限类型
         * 20：浏览者
         * 30：开发者
         * 40：管理员
         * @example `30`
         */
        accessLevel: number;
    };
}
