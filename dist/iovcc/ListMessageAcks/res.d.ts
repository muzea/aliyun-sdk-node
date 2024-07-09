export interface ListMessageAcksResponse {
    /**
     * 请求ID。
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * ack记录分页数据对象。
     */
    MessageAcks: {
        /**
         * 分页对象。
         */
        Pagination: {
            /**
             * 分页页码。
             * @example `1`
             */
            PageIndex: number;
            /**
             * 总分页数。
             * @example `2`
             */
            TotalPageCount: number;
            /**
             * 分页每页数据集大小。
             * @example `20`
             */
            PageSize: number;
            /**
             * 数据集总数。
             * @example `30`
             */
            TotalCount: number;
        };
        /**
         * 分页列表数据。
         */
        List: {
            /**
             * dis系统设备ID。
             * @example `fc71429ddd9b473c81d7ef5f33ab10cc`
             */
            DeviceId: string;
            /**
             * 消息到达时间，精确到ms。
             * @example `1525684245000`
             */
            AckTime: number;
            /**
             * 消息ID。
             * @example `24266`
             */
            Mid: number;
        }[];
    };
}
