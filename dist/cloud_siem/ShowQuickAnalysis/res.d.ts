export interface ShowQuickAnalysisResponse {
    /**
     * 索引字段列表。
     */
    Data: {
        /**
         * 日志索引字段列表。
         */
        IndexList: string[];
    };
    /**
     * 请求消息ID。
     * @example `2A4FBD89-C29D-5973-B882-CB2D23F6****`
     */
    RequestId: string;
}
