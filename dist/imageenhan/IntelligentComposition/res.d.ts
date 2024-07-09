export interface IntelligentCompositionResponse {
    /**
     * 请求ID。
     * @example `C1D52018-D67A-46AD-9AAA-031750A6E770`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 智能构图结果。
         */
        Elements: {
            /**
             * 输出框的左上角横坐标。
             * @example `43`
             */
            MinX: number;
            /**
             * 输出框的评分，取值范围0~5。分数越高说明构图效果越好，推荐3.8以上为较好构图得分。
             * @example `3.6567564`
             */
            Score: number;
            /**
             * 输出框的右下角纵坐标。
             * @example `672`
             */
            MaxY: number;
            /**
             * 输出框的右下角横坐标。
             * @example `981`
             */
            MaxX: number;
            /**
             * 输出框的左上角纵坐标。
             * @example `96`
             */
            MinY: number;
        }[];
    };
}
