export interface ExportInsightWorkitemStatusResponse {
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
         * @example `701615370`
         */
        id: number;
        /**
         * 创建时间
         * @example `1713430241000`
         */
        gmtCreate: number;
        /**
         * 更新时间
         * @example `1713430241000`
         */
        gmtModified: number;
        /**
         * 需求ID（工作项ID）
         * @example `636f661a612a945bbcdb4cxxxx`
         */
        workitemId: string;
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
         * 指派人ID
         * @example `65e836b981d758be7a25xxxx`
         */
        assignedToId: string;
        /**
         * 创建人ID
         * @example `65e836b981d758be7a25xxxx`
         */
        creatorId: string;
        /**
         * 实际关闭时间
         * @example `33166339200000`
         */
        gmtClosed: number;
        /**
         * 预计开始时间
         * @example `33166339200000`
         */
        gmtTodo: number;
        /**
         * 预计完成时间
         * @example `33166339200000`
         */
        gmtDue: number;
        /**
         * 实际开始时间（需求排期或确认）
         * @example `33166339200000`
         */
        gmtStart: number;
        /**
         * 是否归档(Y|N)
         * @example `N`
         */
        isArchived: string;
        /**
         * 是否已完成（Y|N）
         * @example `Y`
         */
        isDone: string;
        /**
         * 父工作项ID
         * @example `c3640ab6233fcc10a7e3aaxxxx`
         */
        parentId: string;
        /**
         * 参与人ID列表（逗号分隔）
         * @example `6135b21fb383ef39551cxxxx,63466a385dc8531eebd7xxxx`
         */
        participantIds: string;
        /**
         * 大阶段（10-100）,对应todo、doing、done
         * @example `10`
         */
        phase: number;
        /**
         * 小阶段（10-100）,对应projex的确认阶段、分析阶段、处理阶段、设计阶段、开发阶段等
         * @example `10`
         */
        stage: number;
        /**
         * 优先级（0-9）
         * @example `0`
         */
        priority: number;
        /**
         * 产品ID
         * @example `无`
         */
        productId: string;
        /**
         * 项目ID
         * @example `505ac6433dfbda8df0b08bxxxx`
         */
        projectId: string;
        /**
         * 来源 teambition/projex
         * @example `projex`
         */
        source: string;
        /**
         * 迭代ID
         * @example `505ac6433dfbda8df0b08bxxxx`
         */
        sprintId: string;
        /**
         * 状态名称
         * @example `待处理`
         */
        status: string;
        /**
         * 状态id
         * @example `100005`
         */
        statusId: string;
        /**
         * 故事点数
         * @example `10.0`
         */
        storyPoint: number;
        /**
         * 标题
         * @example `测试`
         */
        subject: string;
        /**
         * 工作项大类型：需求，任务缺陷
         * @example `1`
         */
        type: number;
        /**
         * 工作项子类型：技术类需求，产品类需求等
         * @example `9uy29901re573f561d69xxxx`
         */
        subType: string;
        /**
         * 版本ID
         * @example `无`
         */
        versionId: string;
        /**
         * 实际使用工时（分钟）
         * @example `10`
         */
        workTime: number;
        /**
         * 预计使用工时（分钟）
         * @example `10`
         */
        expectedWorkTime: number;
        /**
         * 版本
         * @example `[6a8cdda167415bea1506c7262c]`
         */
        versions: string;
    }[];
}
