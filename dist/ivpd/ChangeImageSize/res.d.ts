export interface ChangeImageSizeResponse {
    /**
     * 错误信息，code非“0”的情况下具体错误信息请查看本字段。
     * @example `success`
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
         * 图片URL，尺寸变换后的输出图片地址，注意 <font color=red>有效期是72小时</font>。
         * @example `http://a.b.c/2.jpg`
         */
        Url: string;
    };
    /**
     * 状态码
     * @example `0`
     */
    Code: string;
}
