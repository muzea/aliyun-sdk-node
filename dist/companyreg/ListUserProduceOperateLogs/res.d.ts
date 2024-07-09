export interface ListUserProduceOperateLogsResponse {
    /**
     * 页码
     * @example `1`
     */
    PageNum: number;
    /**
     * 请求id
     * @example `0DCBE2FF-2DFC-56DC-9A15-BDF27B7FFB1B`
     */
    RequestId: string;
    /**
     * 请求是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 总条数
     * @example `6`
     */
    TotalItemNum: number;
    /**
     * 分页大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 总页码
     * @example `23`
     */
    TotalPageNum: number;
    /**
     * 操作日志列表
     */
    Data: {
        /**
         * 操作时间
         * @example `1695324000002`
         */
        OperateTime: number;
        /**
         * 操作类型
         * @example `user`
         */
        OperateUserType: string;
        /**
         * 交付单ID
         * @example `P20210928095324000002`
         */
        BizId: string;
        /**
         * 操作人名称
         * @example `系统`
         */
        OperateName: string;
        /**
         * 业务状态
         * @example `10`
         */
        BizStatus: number;
        /**
         * 变更后状态
         * @example `35`
         */
        ToBizStatus: number;
        /**
         * 业务类型
         * @example `esp.wangwen`
         */
        BizType: string;
        Note: string;
    }[];
}
