export interface ExportInsightSpaceResponse {
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
         * @example `11034222`
         */
        id: number;
        /**
         * 创建时间
         * @example `1706510424000`
         */
        gmtCreate: number;
        /**
         * 更新时间
         * @example `1706511201000`
         */
        gmtModified: number;
        /**
         * 唯一标识
         * @example `83a2861bbb43b270a04b42xxxx`
         */
        identifier: string;
        /**
         * 是否删除(Y|N)
         * @example `N`
         */
        isDeleted: string;
        /**
         * 企业id
         * @example `61db9af2148974246be6xxxx`
         */
        organizationId: string;
        /**
         * 空间描述
         * @example `项目描述`
         */
        description: string;
        /**
         * 空间名称
         * @example `研发项目`
         */
        name: string;
        /**
         * 空间类型，企业/项目/产品
         * @example `Project`
         */
        type: string;
        /**
         * 空间模板类型：敏捷研发，经典项目等
         * @example `Project`
         */
        category: string;
        /**
         * 空间来源
         * @example `projex`
         */
        source: string;
        /**
         * 项目状态
         * @example `未开始`
         */
        status: string;
        /**
         * 项目状态阶段
         * @example `10`
         */
        stage: string;
    }[];
}
