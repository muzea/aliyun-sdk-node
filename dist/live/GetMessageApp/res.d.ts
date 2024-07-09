export interface GetMessageAppResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-****-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 应用配置。
         */
        AppConfig: any;
        /**
         * 互动消息应用ID。
         * @example `VKL3***`
         */
        AppId: string;
        /**
         * 互动消息应用名称。
         * @example `testApp`
         */
        AppName: string;
        /**
         * 应用创建的UTC时间戳。
         * @example `502280113`
         */
        CreateTime: number;
        /**
         * 拓展字段。
         */
        Extension: any;
        /**
         * 互动消息应用状态。取值为1表示应用状态正常。
         * @example `1`
         */
        Status: number;
    };
}
