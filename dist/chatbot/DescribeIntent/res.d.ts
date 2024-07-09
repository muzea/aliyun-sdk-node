export interface DescribeIntentResponse {
    /**
     * 请求唯一标识
     * @example `a22afaf2adfasf2gr345fga45ada`
     */
    RequestId: string;
    /**
     * 意图ID
     * @example `84243341`
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
         * 槽位唯一标识
         * @example `aa4d2a343a3ad4afad`
         */
        SlotId: string;
        /**
         * 槽位名称
         * @example `天气`
         */
        Name: string;
        /**
         * 槽位划词结果
         * @example `天气`
         */
        Value: string;
        /**
         * 是否交互式填槽，默认为false
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
}
