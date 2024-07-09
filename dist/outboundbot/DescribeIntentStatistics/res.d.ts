export interface DescribeIntentStatisticsResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 实例所属分组ID。
     * @example `0c3f352f-d045-491d-9ce7-11f2d2b7775d`
     */
    GroupId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
    /**
     * 总计的实例数
     * @example `123`
     */
    ProcessIntentNum: number;
    /**
     * 实例id
     * @example `a4274627-265f-4e14-b2d6-4ee7d4f8593e`
     */
    InstanceId: string;
    /**
     * 总计个数
     * @example `100`
     */
    GlobalIntentNum: number;
    /**
     * 意图信息列表
     * @example `[]`
     */
    ProcessIntents: {
        /**
         * 类型
         * @example `ProcessIntent`
         */
        Type: string;
        /**
         * 实例所属分组ID。
         * @example `0c3f352f-d045-491d-9ce7-11f2d2b7775d`
         */
        GroupId: string;
        /**
         * 命中后无应答
         * @example `1`
         */
        HitAfterNoAnswer: number;
        /**
         * 实例id
         * @example `a4274627-265f-4e14-b2d6-4ee7d4f8593e`
         */
        InstanceId: string;
        /**
         * 命中数量
         * @example `10`
         */
        HitNum: number;
        /**
         * 意图id
         * @example `12343`
         */
        IntentId: string;
        /**
         * 意图名称
         * @example `请假意图`
         */
        IntentName: string;
        RateDisplay: string;
    }[];
    /**
     * 全局事件数组
     * @example `[]`
     */
    GlobalIntents: {
        /**
         * 类型
         * @example `GlobalIntent`
         */
        Type: string;
        /**
         * 实例所属分组ID。
         * @example `0c3f352f-d045-491d-9ce7-11f2d2b7775d`
         */
        GroupId: string;
        /**
         * 命中后无应答
         * @example `1`
         */
        HitAfterNoAnswer: number;
        /**
         * 实例id
         * @example `a4274627-265f-4e14-b2d6-4ee7d4f8593e`
         */
        InstanceId: string;
        /**
         * 命中数量
         * @example `11`
         */
        HitNum: number;
        /**
         * 意图id
         * @example `21343425`
         */
        IntentId: string;
        /**
         * 意图名称
         * @example `请假意图`
         */
        IntentName: string;
    }[];
    /**
     * 意图信息列表
     */
    IntentsAfterNoAnswer: {
        /**
         * 实例id
         * @example `a4274627-265f-4e14-b2d6-4ee7d4f8593e`
         */
        InstanceId: string;
        GroupId: string;
        HitAfterNoAnswer: number;
        IntentId: string;
        IntentName: string;
    }[];
}
