export interface UpdateUserProvisioningConfigurationRequest {
    /**
     * 目录ID。
     * @example `d-003qew84****`
     */
    "DirectoryId": string;
    /**
     * 新设置的用户登录后的默认落地页地址。
     * 默认值：https://homenew.console.aliyun.com。
     * @example `https://home.console.aliyun.com/home/dashboard/ProductAndService`
     */
    "NewDefaultLandingPage"?: string;
    /**
     * 新设置的登录Session的持续时长。
     * 单位：小时。
     * 取值范围：1~24。
     * 默认值：6。
     * @example `6`
     */
    "NewSessionDuration"?: number;
}
