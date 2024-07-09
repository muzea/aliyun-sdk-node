export interface ListProblemsResponse {
    /**
     * Id of the request
     * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
     */
    requestId: string;
    /**
     * 故障列表
     */
    data: {
        /**
         * 故障id
         * @example `1`
         */
        problemId: number;
        /**
         * 是否手动
         * @example `true`
         */
        isManual: boolean;
        /**
         * 是否升级
         * @example `true`
         */
        isUpgrade: boolean;
        /**
         * 事件ID
         * @example `10000`
         */
        incidentId: number;
        /**
         * 创建时间
         * @example `2020-09-08 15:59:59`
         */
        createTime: string;
        /**
         * 修改时间
         * @example `2020-09-08 15:59:59`
         */
        updateTime: string;
        /**
         * 故障编号
         * @example `P34438300000001116258132229577472`
         */
        problemNumber: string;
        /**
         * 故障名称
         * @example `故障`
         */
        problemName: string;
        /**
         * 故障状态  HANDLING    处理中 RECOVERED  已恢复  REPLAYING   复盘中  REPLAYED     已复盘 CANCEL        已取消
         * @example `HANDLING`
         */
        problemStatus: string;
        /**
         * 故障等级 1=P1 2=P2 3=P3 4=P4
         * @example `P1`
         */
        problemLevel: string;
        /**
         * 发现时间
         * @example `2020-09-08 15:59:59`
         */
        discoverTime: string;
        /**
         * 恢复时间
         * @example `2020-09-08 15:59:59`
         */
        recoveryTime: string;
        /**
         * 关联服务ID
         * @example `1`
         */
        relatedServiceId: string;
        /**
         * 关联服务名称
         * @example `服务1`
         */
        serviceName: string;
        /**
         * 影响服务
         */
        affectServices: {
            /**
             * 影响服务ID
             * @example `100`
             */
            serviceId: number;
            /**
             * 服务描述
             * @example `服务描述`
             */
            serviceDescription: string;
            /**
             * 服务名字
             * @example `冲上云霄`
             */
            serviceName: string;
            /**
             * 修改时间
             * @example `2020-09-08 15:59:59`
             */
            updateTime: string;
        }[];
        /**
         * 主要处理人ID
         * @example `100`
         */
        mainHandlerId: number;
        /**
         * 主要处理人名称
         * @example `王宇`
         */
        mainHandlerName: string;
        /**
         * 取消时间
         * @example `2020-09-08 15:59:59`
         */
        cancelTime: string;
        /**
         * 完结时间
         * @example `2020-09-08 15:59:59`
         */
        finishTime: string;
        /**
         * 复盘时间
         * @example `2020-09-08 15:59:59`
         */
        replayTime: string;
        serviceDeletedType: number;
        mainHandlerIsValid: number;
    }[];
    /**
     * 当前页
     * @example `1`
     */
    pageNumber: number;
    /**
     * 页大小
     * @example `10`
     */
    pageSize: number;
    /**
     * 总条数
     * @example `100`
     */
    totalCount: number;
}
