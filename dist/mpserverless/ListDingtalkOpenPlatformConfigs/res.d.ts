export interface ListDingtalkOpenPlatformConfigsResponse {
    /**
     * 请求ID。
     * @example `D8A5FF68-2C8A-46D0-A11C-FA034F4F475F`
     */
    RequestId: string;
    /**
     * 钉钉小程序相关配置。
     */
    Configs: {
        /**
         * 修改时间。
         * @example `2020-01-17T03:04:46Z`
         */
        UpdateTime: string;
        /**
         * 钉钉小程序密钥。
         * @example `1r0ElNPFqLI6qgY08*******************************9TIK3RN_5fk9SEMO`
         */
        AppSecret: string;
        /**
         * 钉钉小程序ID。
         * @example `dingoa7pqicyk3x9******`
         */
        AppId: string;
        /**
         * 创建时间。
         * @example `2020-01-17T03:04:46Z`
         */
        CreateTime: string;
    }[];
}
