export interface GetTrackListResponse {
    /**
     * 请求ID
     * @example `10A1AD70-E48E-476D-98D9-39BD92193837`
     */
    RequestId: string;
    /**
     * 分页用，第一次查询不设置，后续查询设置为上一次Response中sOffsetCreateTime值（本字段已废弃）
     * @example `（本字段已废弃）`
     */
    OffsetCreateTime: string;
    /**
     * 当前页码
     * @example `1`
     */
    PageNo: number;
    /**
     * 每页大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数
     * @example `100`
     */
    Total: number;
    /**
     * （本字段已废弃）
     * @example `（本字段已废弃）`
     */
    OffsetCreateTimeDesc: string;
    data: {
        /**
         * 跟踪数据记录
         */
        stat: {
            /**
             * 点击率
             * @example `0`
             */
            RcptClickRate: string;
            /**
             * 独立打开数
             * @example `0`
             */
            RcptUniqueOpenCount: string;
            /**
             * 点击量
             * @example `0`
             */
            RcptClickCount: string;
            /**
             * 独立点击数
             * @example `0`
             */
            RcptUniqueClickCount: string;
            /**
             * 创建时间
             * @example `2019-09-29T13:28Z`
             */
            CreateTime: string;
            /**
             * 独立打开率
             * @example `0`
             */
            RcptUniqueOpenRate: string;
            /**
             * 独立点击率
             * @example `0`
             */
            RcptUniqueClickRate: string;
            /**
             * 总数
             * @example `0`
             */
            TotalNumber: string;
            /**
             * 打开率
             * @example `0`
             */
            RcptOpenRate: string;
            /**
             * 打开量
             * @example `0`
             */
            RcptOpenCount: string;
        }[];
    };
}
