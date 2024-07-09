export interface ListJobInfosResponse {
    /**
     * 请求id。
     * @example `0bc13a9516807484336515320e38f5`
     */
    requestId: string;
    /**
     * 业务成功与否。如果非空且不是200，那么表示业务处理失败。
     * @example `200`
     */
    httpCode: number;
    /**
     * 返回结果。
     */
    data: {
        /**
         * 返回结果的总数量。
         * @example `64`
         */
        totalCount: number;
        /**
         * 当前页码。
         * @example `2`
         */
        pageNumber: number;
        /**
         * 每页显示条数。
         * @example `10`
         */
        pageSize: number;
        /**
         * 作业信息列表
         */
        jobInfoList: {
            /**
             * 租户ID
             * @example `213065738244354`
             */
            tenantId: string;
            /**
             * 地域id。
             * @example `cn-shanghai`
             */
            region: string;
            /**
             * 集群id
             * @example `AY20A`
             */
            cluster: string;
            /**
             * 实例ID。
             * @example `20230410050036549gfmsdwf60gg`
             */
            instanceId: string;
            /**
             * 提交作业的账号
             * @example `ALIYUN$xxx@test.aliyunid.com`
             */
            jobOwner: string;
            /**
             * maxcompute项目名称
             * @example `openrec_new`
             */
            project: string;
            /**
             * 作业类型
             * @example `SQL`
             */
            jobType: string;
            /**
             * 优先级
             * @example `1`
             */
            priority: number;
            /**
             * 状态
             * @example `running`
             */
            status: string;
            /**
             * 作业使用的配额昵称
             * @example `my_quota`
             */
            quotaNickname: string;
            /**
             * quota类型
             * @example `subscription`
             */
            quotaType: string;
            /**
             * cu使用总量
             * @example `10`
             */
            cuUsage: number;
            /**
             * 内存使用总量
             * @example `40`
             */
            memoryUsage: number;
            /**
             * 作业的cu快照占比
             * @example `0.48`
             */
            cuSnapshot: number;
            /**
             * 作业的内存快照占比
             * @example `0.42`
             */
            memorySnapshot: number;
            /**
             * 作业快照状态
             * @example `running`
             */
            statusSnapshot: string;
            /**
             * 作业的提交时间
             * @example `1672112013`
             */
            submittedAtTime: number;
            /**
             * 等待时间
             * @example `100`
             */
            waitingTime: number;
            /**
             * 作业的开始运行时间
             * @example `1672112113`
             */
            runningAtTime: number;
            /**
             * 运行时间
             * @example `800`
             */
            runningTime: number;
            /**
             * 运行结束时间
             * @example `0`
             */
            endAtTime: number;
            /**
             * 总运行时长
             * @example `900`
             */
            totalTime: number;
            /**
             * sql签名
             * @example `i094KijGrN3kOXZ74kbexB77XQY=`
             */
            signature: string;
            /**
             * 上游平台
             * @example `platform_3`
             */
            extPlantFrom: string;
            /**
             * DataWorks节点ID
             * @example `node_4`
             */
            extNodeId: string;
            /**
             * 执行责任人
             * @example `duty_2`
             */
            extNodeOnDuty: string;
            /**
             * 标签
             * @example `[]`
             */
            tags: string;
        }[];
    };
}
