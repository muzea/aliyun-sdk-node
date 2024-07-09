export interface DetectImageElementsResponse {
    /**
     * 错误信息，code非“0”的情况下具体错误信息请查看本字段。
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID，阿里云系统自动生成
     * @example `7308917D-9E1B-4F11-8A79-0F140270E672`
     */
    RequestId: string;
    /**
     * 响应的数据，具体字段请查看结构定义。
     */
    Data: {
        /**
         * 元素列表
         */
        Elements: {
            /**
             * 元素类别
             * @example `character`
             */
            Type: string;
            /**
             * 元素宽度，单位：像素
             * @example `1080`
             */
            Width: number;
            /**
             * 元素高度，单位：像素
             * @example `1920`
             */
            Height: number;
            /**
             * 元素坐标y
             * @example `65`
             */
            Y: number;
            /**
             * 识别分值, 范围： \[0.0, 1.0\]
             * @example `0.9556`
             */
            Score: number;
            /**
             * 元素坐标x
             * @example `211`
             */
            X: number;
        }[];
    };
    /**
     * 状态码
     * @example `0`
     */
    Code: string;
}
