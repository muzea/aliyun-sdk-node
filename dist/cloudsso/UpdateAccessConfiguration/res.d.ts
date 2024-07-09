export interface UpdateAccessConfigurationResponse {
    /**
     * 请求ID。
     * @example `9B13E4EE-3853-5852-9165-597C32AD8FB7`
     */
    RequestId: string;
    /**
     * 访问配置信息。
     */
    AccessConfiguration: {
        /**
         * 访问配置名称。
         * @example `ECS-Admin`
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
         * @example `2021-11-02T08:44:23Z`
         */
        CreateTime: string;
        /**
         * 访问配置的修改时间。
         * @example `2021-11-02T10:10:01Z`
         */
        UpdateTime: string;
        /**
         * 状态通知信息。
         */
        StatusNotifications: string[];
        /**
         * 访问配置ID。
         * @example `ac-00jhtfl8thteu6uj****`
         */
        AccessConfigurationId: string;
    };
}
