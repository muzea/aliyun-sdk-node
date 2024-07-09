export interface RecognizeImageColorResponse {
    /**
     *
     * @example `Success`
     */
    Message: string;
    /**
     *
     * @example `7308917D-9E1B-4F11-8A79-0F140270E672`
     */
    RequestId: string;
    /**
     * 响应的数据，具体字段请查看结构定义。
     */
    Data: {
        /**
         * 色板列表
         */
        ColorTemplateList: {
            /**
             * RGB颜色值(16进制)，如：291A18
             * @example `291A18`
             */
            Color: string;
            /**
             * 所占比例, 取值范围 \[0.0, 1.0\]
             * @example `0.3`
             */
            Percentage: number;
            /**
             * 颜色标签，如：gray, red
             * @example `gray`
             */
            Label: string;
        }[];
    };
    /**
     *
     * @example `0`
     */
    Code: string;
}
