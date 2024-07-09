export interface GetUserProvisioningConfigurationResponse {
    /**
     * 请求ID。
     * @example `66898413-EB80-556D-9429-06FE3548F672`
     */
    RequestId: string;
    /**
     * RAM用户同步的全局配置信息。
     */
    UserProvisioningConfiguration: {
        /**
         * 登录Session的持续时长。
         * 单位：小时。
         * 取值范围：1~24。
         * 默认值：6。
         * @example `10`
         */
        SessionDuration: number;
        /**
         * 创建时间。
         * @example `2022-11-28T03:55:42Z`
         */
        CreateTime: string;
        /**
         * 目录ID。
         * @example `d-00fc2p61****`
         */
        DirectoryId: string;
        /**
         * 用户登录后的默认落地页地址。
         * 默认值：https://homenew.console.aliyun.com。
         * @example `https://homenew.console.aliyun.com`
         */
        DefaultLandingPage: string;
        /**
         * 修改时间。
         * @example `2022-11-28T03:55:42Z`
         */
        UpdateTime: string;
    };
}
