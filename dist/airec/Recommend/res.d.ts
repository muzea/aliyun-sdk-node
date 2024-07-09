export interface RecommendResponse {
    /**
     * 返回结果
     */
    result: {
        /**
         * 不用关心，debug时可能用到
         * @example `xxx`
         */
        matchInfo: string;
        /**
         * 回传日志时使用，回传日志时，trace_id=ali
         * @example `ali`
         */
        traceId: string;
        /**
         * 物品在需要展示的位置，从0开始（注意：返回结果已经按照position排序，可以不用关注）
         * @example `1`
         */
        position: number;
        /**
         * 物品ID
         * @example `123`
         */
        itemId: string;
        /**
         * 物品类型
         * @example `item`
         */
        itemType: string;
        /**
         * 返回结果里traceInfo的值（注意：每个item的值均不一样，回传日志时，需要传对应的）
         * @example `"1007.62381.131491.100200300000000:bcb946ed-3f09-4e9b-bf4a-c19862f42231:792783::0:s101:::15:content___130788_stall:item:i2i_common_common:0.0205279946753756:null:null:1673258031504::context__recall_index=156,context__hour=17,context__trigger_num=2::C7EF99C9-6C55-5D45-A8D5-0754082E9DCF:hot_common,i2i_common_common,i2i_swing_common,hot_full:::::"`
         */
        traceInfo: string;
        /**
         * 权重
         * @example `1`
         */
        weight: number;
        /**
         * 流控加权字段；=0未加权；>0加权；<0降权
         * @example `0`
         */
        flowWeight: number;
        /**
         * 状态信息
         * @example `Successful`
         */
        message: string;
    }[];
    /**
     * 状态码
     * @example `200`
     */
    code: string;
    /**
     * 请求ID
     * @example `04707E49-642A-4649-827A-F8EEB07D4C27`
     */
    requestId: string;
    /**
     * 状态信息
     * @example `"i2i_common_common;NotFound;1673254401;similar product/content of clicked ones;2023-01-09 16:53:21"`
     */
    message: string;
}
