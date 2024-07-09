export interface ExportInsightSpaceRefResponse {
    /**
     * 总条数
     * @example `100`
     */
    totalCount: number;
    /**
     * 下一页token，为null表示没有下一页
     * @example `2`
     */
    nextToken: string;
    /**
     * 返回条数
     * @example `10`
     */
    maxResults: number;
    /**
     * 返回结果
     */
    result: {
        /**
         * 记录自增Id
         * @example `356525`
         */
        id: number;
        /**
         * 创建时间
         * @example `1704267849000`
         */
        gmtCreate: number;
        /**
         * 更新时间
         * @example `1704267849000`
         */
        gmtModified: number;
        /**
         * 唯一标识
         * @example `49565`
         */
        identifier: string;
        /**
         * 是否删除(Y|N)
         * @example `N`
         */
        isDeleted: string;
        /**
         * 企业id
         * @example `61db9af2148974246bexxxx`
         */
        organizationId: string;
        /**
         * 创建人ID
         * @example `65659358c319d2a0f912xxxx`
         */
        creatorId: string;
        /**
         * 修改人ID
         * @example `65659358c319d2a0f912xxxx`
         */
        modifierId: string;
        /**
         * 源空间id
         * @example `7bc2be989727d0d4c9801fxxxx`
         */
        fromId: string;
        /**
         * 目标空间id
         * @example `732026500a48d7a74f8b43xxxx`
         */
        toId: string;
        /**
         * 关联类型：项目集关联项目ASSOCIATED
         * @example `ASSOCIATED`
         */
        type: string;
    }[];
}
