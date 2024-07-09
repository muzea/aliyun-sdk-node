export interface GetAccessConfigurationResponse {
    /**
     * 请求ID。
     * @example `D5E40508-483B-52F6-993C-D880B0F87591`
     */
    RequestId: string;
    /**
     * 访问配置信息。
     */
    AccessConfiguration: {
        /**
         * 访问配置名称。
         * @example `VPC-Admin`
         */
        AccessConfigurationName: string;
        /**
         * 会话持续时间。
         * 云SSO用户使用访问配置访问RD账号时，会话最多保持的时间。
         * 单位：秒。
         * @example `3600`
         */
        SessionDuration: number;
        /**
         * 访问配置的描述。
         * @example `This is an access configuration.`
         */
        Description: string;
        /**
         * 初始访问页面。
         * 云SSO用户使用访问配置访问RD账号时，初始访问的页面地址。
         * @example `https://cloudsso.console.aliyun.com`
         */
        RelayState: string;
        /**
         * 访问配置的创建时间。
         * @example `2021-06-30T09:39:44Z`
         */
        CreateTime: string;
        /**
         * 访问配置的修改时间。
         * @example `2021-07-26T03:02:11Z`
         */
        UpdateTime: string;
        /**
         * 状态通知信息。
         */
        StatusNotifications: string[];
        /**
         * 访问配置ID。
         * @example `ac-00ccule7tadaijxc****`
         */
        AccessConfigurationId: string;
    };
}
