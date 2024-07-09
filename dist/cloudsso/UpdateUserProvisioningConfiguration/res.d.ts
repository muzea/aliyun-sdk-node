export interface UpdateUserProvisioningConfigurationResponse {
    /**
     * 请求ID。
     * @example `BBC2ED1D-FAC5-3DF8-B63C-992B85B08DD9`
     */
    RequestId: string;
    /**
     * RAM用户同步的全局设置。
     */
    UserProvisioningConfiguration: {
        /**
         * 登录Session的持续时长。
         * 单位：小时。
         * 取值范围：1~24。
         * 默认值：6。
         * @example `6`
         */
        SessionDuration: number;
        /**
         * 创建时间。
         * @example `2022-11-28T03:55:42Z`
         */
        CreateTime: string;
        /**
         * 目录ID。
         * @example `d-003qew84****`
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
