export interface ExportInsightSprintResponse {
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
         * 创建时间
         * @example `1710989643000`
         */
        gmtCreate: number;
        /**
         * 记录自增Id
         * @example `18471761`
         */
        id: number;
        /**
         * 更新时间
         * @example `1711936113000`
         */
        gmtModified: number;
        /**
         * 唯一标识
         * @example `e4895cadc86632f34dfaa7xxxx`
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
         * 迭代计划结束时间
         * @example `1711728000000`
         */
        gmtEnd: number;
        /**
         * 迭代计划开始时间
         * @example `1711936113000`
         */
        gmtStart: number;
        /**
         * 实际开始时间
         * @example `1711936113000`
         */
        actualStart: number;
        /**
         * 实际结束时间
         * @example `1711936113000`
         */
        actualEnd: number;
        /**
         * 迭代名称
         * @example `迭代0601`
         */
        name: string;
        /**
         * 来源
         * @example `projex`
         */
        source: string;
        /**
         * 项目id
         * @example `385e7e5a4be6791f0a5185xxxx`
         */
        projectId: string;
        /**
         * 工时容量评估字段
         * @example `60.0`
         */
        workTimeCapacity: number;
        /**
         * 迭代状态：待开始，进行中，已完成/关闭
         * @example `50`
         */
        status: number;
    }[];
}
