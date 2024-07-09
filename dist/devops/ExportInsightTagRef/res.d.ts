export interface ExportInsightTagRefResponse {
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
         * @example `41317426`
         */
        id: number;
        /**
         * 创建时间
         * @example `1696660187000`
         */
        gmtCreate: number;
        /**
         * 更新时间
         * @example `1696660187000`
         */
        gmtModified: number;
        /**
         * 唯一标识
         * @example `8545272`
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
         * 标签名字
         * @example `1`
         */
        name: string;
        /**
         * 标签本身唯一标识
         * @example `19e0bc5348ccbe6c0d00fbxxxx`
         */
        tagId: string;
        /**
         * 打标对象的资源id
         * @example `bde89961b5a4acc8cf54eaxxxx`
         */
        targetId: string;
        /**
         * 打标对象的资源类型，如workitem space code
         * @example `Workitem`
         */
        targetType: string;
    }[];
}
