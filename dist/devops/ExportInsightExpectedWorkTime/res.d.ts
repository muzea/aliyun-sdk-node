export interface ExportInsightExpectedWorkTimeResponse {
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
         * @example `26281535`
         */
        id: number;
        /**
         * 创建时间
         * @example `1714976497000`
         */
        gmtCreate: number;
        /**
         * 更新时间
         * @example `1714976520000`
         */
        gmtModified: number;
        /**
         * 预计工时标识
         * @example `bd4ddc7b0ea0ef2ab52699xxxx`
         */
        identifier: string;
        /**
         * 是否删除(Y|N)
         * @example `N
        `
         */
        isDeleted: string;
        /**
         * 租户隔离ID
         * @example `61db9af2148974246be6xxxx`
         */
        organizationId: string;
        /**
         * 项目id
         * @example `6c4687b0179e1d458fedf1xxxx`
         */
        projectId: string;
        /**
         * 预计工时填报人
         * @example `63466a385dc8531eebd7xxxx`
         */
        recorderId: string;
        /**
         * 工时来源
         * @example `projex`
         */
        source: string;
        /**
         * 工时类别
         * @example `产品`
         */
        type: string;
        /**
         * 预计工时时长
         * @example `180`
         */
        value: number;
        /**
         * 工作项ID
         * @example `de7c6fd3bd4b53f4d9e279xxxx`
         */
        workitemId: string;
    }[];
}
