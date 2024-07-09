export interface ListIntentResponse {
    /**
     * 请求ID
     * @example `23dsfa34r2s2s2sd12`
     */
    RequestId: string;
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
    /**
     * 意图列表
     */
    Intents: {
        /**
         * 意图ID
         * @example `234234234234`
         */
        IntentId: number;
        /**
         * 意图名称
         * @example `查天气意图`
         */
        IntentName: string;
        /**
         * 意图别名
         * @example `查天气意图`
         */
        AliasName: string;
        /**
         * 意图关联的槽位信息
         */
        SlotInfos: {
            /**
             * 槽位ID
             * @example `12134223`
             */
            SlotId: string;
            /**
             * 槽位名
             * @example `天气`
             */
            Name: string;
            /**
             * 槽位值（实体名）
             * @example `天气`
             */
            Value: string;
            /**
             * 是否交互式收集
             * @example `false`
             */
            Interactive: boolean;
            /**
             * 是否数组
             * @example `false`
             */
            Array: boolean;
            /**
             * 是否敏感
             * @example `false`
             */
            Encrypt: boolean;
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
        /**
         * 创建人唯一标识
         * @example `123231`
         */
        CreateUserId: string;
        /**
         * 创建人名称
         * @example `test`
         */
        CreateUserName: string;
        /**
         * 修改人唯一标识
         * @example `123231`
         */
        ModifyUserId: string;
        /**
         * 修改人名称
         * @example `test`
         */
        ModifyUserName: string;
    }[];
}
