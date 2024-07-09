export interface ListUserSayResponse {
    /**
     * 请求ID
     * @example `fs1fg4512v43572v23`
     */
    RequestId: string;
    /**
     * 话术列表
     */
    UserSays: {
        /**
         * 意图ID
         * @example `235564564`
         */
        IntentId: number;
        /**
         * 话术ID
         * @example `3453452138`
         */
        UserSayId: number;
        /**
         * 话术内容
         * @example `您做核酸了嘛`
         */
        Content: string;
        /**
         * 关联槽位信息
         */
        SlotInfos: {
            /**
             * 意图槽位ID
             * @example `3456sdfg3tu`
             */
            SlotId: string;
            /**
             * 槽位在意图话术中的下标
             * @example `2`
             */
            StartIndex: number;
            /**
             * 槽位在意图话术中的下标（不含）
             * @example `4`
             */
            EndIndex: number;
        }[];
        /**
         * 创建时间（UTC时间）
         * @example `2021-08-12T16:00:01Z`
         */
        CreateTime: string;
        /**
         * 修改时间（UTC时间）
         * @example `2021-08-12T16:00:01Z`
         */
        ModifyTime: string;
    }[];
    /**
     * 总条数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 当前页，默认1
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页面大小，默认10
     * @example `10`
     */
    PageSize: number;
}
