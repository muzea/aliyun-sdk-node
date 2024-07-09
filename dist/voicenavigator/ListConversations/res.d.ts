export interface ListConversationsResponse {
    /**
     * 总计个数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 个数
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求id
     * @example `a2c26e67-5984-4935-984e-bcee52971993`
     */
    RequestId: string;
    /**
     * 页号
     * @example `1`
     */
    PageNumber: number;
    /**
     * 会话列表
     */
    Conversations: {
        /**
         * 结束时间
         * @example `1582266750353`
         */
        EndTime: number;
        /**
         * 是否有转人工
         * @example `false`
         */
        HasToAgent: boolean;
        /**
         * 开始时间
         * @example `1641625694286`
         */
        StartTime: number;
        /**
         * 技能组
         * @example `skg-123`
         */
        SkillGroup: string;
        /**
         * 会话id
         * @example `82b2eaae-ce5c-45f8-8231-f15b6b27e55c`
         */
        ConversationId: string;
        /**
         * 主叫号码
         * @example `135815884***`
         */
        CallingNumber: string;
        /**
         * 挂断原因，有以下枚举：
         *      1.正常完结
         *      2.拒识后机器人挂机
         *      3.静默超时挂机
         *      4.拒识后用户挂机
         *      5.用户无理由挂机
         *      6.命中意图转人工
         *      7.拒识转人工
         *      8.用户侧无交互
         *      9.系统异常中断
         *      10.命中意图转IVR
         *      11.拒识转IVR
         * @example `1`
         */
        EndReason: number;
        /**
         * 轮转次数
         * @example `2`
         */
        Rounds: number;
        /**
         * 挂断时最后一句是否播报完成
         * @example `true`
         */
        HasLastPlaybackCompleted: boolean;
        /**
         * 是否沙箱
         * @example `true`
         */
        SandBox: boolean;
        /**
         * 被叫号码
         * @example `12356`
         */
        CalledNumber: string;
        DsReport: string;
        DsReportTitles: string[];
    }[];
}
