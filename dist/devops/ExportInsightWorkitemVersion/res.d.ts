export interface ExportInsightWorkitemVersionResponse {
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
         * @example `648131`
         */
        id: number;
        /**
         * 创建时间
         * @example `1704251228000`
         */
        gmtCreate: number;
        /**
         * 更新时间
         * @example `1704251228000`
         */
        gmtModified: number;
        /**
         * 唯一标识
         * @example `7ba6e8261b973c976df76b7de1`
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
         * 版本名称
         * @example `版本0501`
         */
        name: string;
        /**
         * 版本开始时间
         * @example `1704297600000`
         */
        gmtStart: number;
        /**
         * 版本发布时间
         * @example `1704902400000`
         */
        gmtPublish: number;
        /**
         * 版本状态，10/50/100 -> TODO/DOING/ARCHIVED
         * @example `100`
         */
        status: number;
        /**
         * 版本是否锁定
         * @example `0`
         */
        lockStatus: number;
        /**
         * 所属空间类型
         * @example `Project`
         */
        targetType: string;
        /**
         * 所属空间类型id
         * @example `7eee44ec7f699d4e6980faxxxx`
         */
        targetId: string;
        /**
         * 来源（projex/teambition）
         * @example `projex`
         */
        source: string;
    }[];
}
