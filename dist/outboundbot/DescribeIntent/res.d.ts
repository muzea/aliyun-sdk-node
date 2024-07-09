export interface DescribeIntentResponse {
    /**
     * http 状态码
     * @example `200`
     */
    HttpStatusCode: number;
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
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 意图信息
     */
    Intent: {
        /**
         * 触发意图的用户表述列表
         * @example `["ok","好的","好吧","好嘞","可以","行啊","行吧","那行","知道了","我看一下","能的","等会吧","等一下","马上还","等一会","过两天","我会想办法处理"]`
         */
        Utterances: string;
        /**
         * 意图描述
         * @example `同意还款意图`
         */
        IntentDescription: string;
        /**
         * 更新时间
         * @example `1578469042851`
         */
        UpdateTime: number;
        /**
         * 创建时间
         * @example `1578469042851`
         */
        CreateTime: number;
        /**
         * 意图关键字，
         * @example `["还款"]`
         */
        Keywords: string;
        /**
         * 话术id
         * @example `6ef95fd5-558f-4ee8-af34-b2ede087a87c`
         */
        ScriptId: string;
        /**
         * 意图id
         * @example `a8494b35-eefb-4c8a-887b-b60d2f0fa57a`
         */
        IntentId: string;
        /**
         * 意图名字
         * @example `统一还款`
         */
        IntentName: string;
    };
}
