export interface ExportInsightWorkTimeResponse {
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
         * @example `49506082`
         */
        id: number;
        /**
         * 创建时间
         * @example `1714978610000`
         */
        gmtCreate: number;
        /**
         * 更新时间
         * @example `1714978610000`
         */
        gmtModified: number;
        /**
         * 唯一标识
         * @example `da70ce5824231ca3c04ef808e0`
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
         * 工时填报人
         * @example `65659358c319d2a0f912xxxx`
         */
        recorderId: string;
        /**
         * 来源: Projex or Teambition
         * @example `projex`
         */
        source: string;
        /**
         * 填报时长
         * @example `120`
         */
        value: number;
        /**
         * 需求ID（工作项ID）
         * @example `17bc1cf9a037a15fc9ce76xxxx`
         */
        workitemId: string;
        /**
         * 项目id
         * @example `09670872890eb1a0bb998exxxx`
         */
        projectId: string;
        /**
         * 实际工时类别
         * @example `研发`
         */
        type: string;
        /**
         * 实际工时-开始时间
         * @example `1714924800000`
         */
        gmtStart: number;
        /**
         * 实际工时-结束时间
         * @example `1715011199999`
         */
        gmtEnd: number;
        /**
         * 工时拆分后的唯一标识
         * @example `000000000cd82d3df50d5e5a5c094094fd7b4461`
         */
        uuid: string;
        /**
         * 工时拆分后的值
         * @example `120`
         */
        actualValue: number;
        /**
         * 工时描述
         * @example `描述信息`
         */
        description: string;
    }[];
}
