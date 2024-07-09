export interface ExportInsightWorkitemStatusJoinWorkitemDefectExtraResponse {
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
         * @example `1714755985000`
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
         * @example `a80a203a9078a7a1b1f2c6xxxx`
         */
        parentId: string;
        /**
         * 参与人ID列表（逗号分隔）
         * @example `6135b21fb383ef39551cf02e,63466a385dc8531eebd764e9`
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
         * @example `2`
         */
        priority: number;
        /**
         * 产品ID
         * @example `无`
         */
        productId: string;
        /**
         * 项目ID
         * @example `6732a29d846bf998dc09e7xxxx`
         */
        projectId: string;
        /**
         * 来源 teambition/projex
         * @example `projex`
         */
        source: string;
        /**
         * 迭代ID
         * @example `731c83a40bbf3c2f080e07xxxx`
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
         * @example `{6a8cdda167415bea1506c7262c}
        `
         */
        versions: string;
        /**
         * extra表自增id
         * @example `123`
         */
        extraId: number;
        /**
         * 发现阶段（10-100）
         * @example `10`
         */
        foundPhase: number;
        /**
         * 实际修复时间（秒）
         * @example `无`
         */
        gmtFixed: string;
        /**
         * 是否低级错误（Y|N）
         * @example `无`
         */
        isStupid: string;
        /**
         * 重复开启次数
         * @example `无`
         */
        reopenNum: number;
        /**
         * 严重程度（0-9）
         * @example `无`
         */
        seriousLevel: number;
        /**
         * 解决方法类型
         * @example `无`
         */
        solution: string;
        /**
         * extra是否删除(归档)字段,  Y(删除或归档) / N(正常)
         * @example `N`
         */
        extraIsDeleted: string;
        /**
         * 验证者id
         * @example `65e836b981d758be7a25xxxx`
         */
        verifierId: string;
    }[];
}
