export interface UpdateDetectProcessResponse {
    /**
     * 错误信息
     * @example `-`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `0c1c45cd-3eee-4e60-b505-2e330b8755d3`
     */
    RequestId: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 流程配置草稿内容
         * @example `{}`
         */
        Draft: string;
        /**
         * 流程配置正式内容
         * @example `2020-12-04T14:47:59.000+08:00`
         */
        CreatedAt: string;
        /**
         * 流程配置正式内容的 MD5
         * @example `987d563d38f5aef27feca8702c689bb1`
         */
        Md5: string;
        /**
         * 检测流程名称
         * @example `Android检测流程`
         */
        Name: string;
        /**
         * 流程配置正式内容
         * @example `{}`
         */
        Content: string;
        /**
         * ID
         * @example `cd1c45cd-3eee-4e60-b505-2e330b8755d3`
         */
        Id: string;
    };
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
}
