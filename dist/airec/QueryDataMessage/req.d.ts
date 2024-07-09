export interface QueryDataMessageRequest {
    /**
     * 实例ID。
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
    /**
     * 开始时间秒级时间戳
     * @example `1586673466`
     */
    "startTime": number;
    /**
     * 结束时间秒级时间戳
     * @example `1586673466`
     */
    "endTime": number;
    /**
     * 智能推荐表名（item/user）
     * @example `item`
     */
    "table": string;
    /**
     * update/delete/add 三选一
     * @example `update`
     */
    "cmdType"?: string;
    /**
     * table 为 item 时必选
     * @example `111`
     */
    "itemId"?: string;
    /**
     * table 为 item 时必选
     * @example `video`
     */
    "itemType"?: string;
    /**
     * table 为 user 时必选
     * @example `222`
     */
    "userId"?: string;
    /**
     * table 为 user 时必选
     * @example `app`
     */
    "userType"?: string;
    /**
     * 默认为 1
     * @example `1`
     */
    "page"?: number;
    /**
     * 默认每页返回 20 条
     * @example `20`
     */
    "size"?: number;
    /**
     * trace_id
     * @example `Alibaba`
     */
    "traceId"?: string;
    /**
     * 场景id
     * @example `test`
     */
    "sceneId"?: string;
    /**
     *
     * expose 曝光
     * click 点击
     * like 点赞
     * comment 评论
     * collect 收藏
     * stay 停留时长
     * cart 加购
     * buy 购买
     * evaluate 评论
     * @example `expose`
     */
    "bhvType"?: string;
    /**
     * CONSOLE   控制台更新物品
     * FEEDER  SDK更新物品
     * @example `CONSOLE`
     */
    "messageSource"?: string;
    "imei"?: string;
}
