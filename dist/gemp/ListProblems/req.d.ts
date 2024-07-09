export interface ListProblemsRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * RESPONSIBLE 我负责的       PARTICIPATED 我参与的  ALL 全部
         * @example `RESPONSIBLE`
         */
        queryType: string;
        /**
         * 故障状态  HANDLING   处理中 RECOVERED 已恢复  REPLAYING   复盘中  REPLAYED     已复盘 CANCEL        已取消
         * @example `HANDLING`
         */
        problemStatus: string;
        /**
         * 故障等级 1=P1 2=P2 3=P3 4=P4
         * @example `P2`
         */
        problemLevel: string;
        /**
         * 影响服务ID
         * @example `1`
         */
        affectServiceId: number;
        /**
         * 应急协同组
         * @example `1`
         */
        serviceGroupId: number;
        /**
         * 主要处理人
         * @example `1`
         */
        mainHandlerId: number;
        /**
         * 复盘负责人
         * @example `1`
         */
        repeaterId: number;
        /**
         * 发现开始时间
         * @example `2020-03-05 15:50:59`
         */
        discoveryStartTime: string;
        /**
         * 发现结束时间
         * @example `2020-03-05 15:50:59`
         */
        discoveryEndTime: string;
        /**
         * 恢复结束时间
         * @example `2020-03-05 15:50:59`
         */
        restoreEndTime: string;
        /**
         * 恢复开始时间
         * @example `2020-03-05 15:50:59`
         */
        restoreStartTime: string;
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
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
    };
}
