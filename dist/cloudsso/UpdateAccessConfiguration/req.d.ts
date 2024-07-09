export interface UpdateAccessConfigurationRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 访问配置ID。
     * @example `ac-00jhtfl8thteu6uj****`
     */
    "AccessConfigurationId": string;
    /**
     * 新的访问配置描述。
     * 长度：最大1024个字符。
     * @example `This is an access configuration.`
     */
    "NewDescription"?: string;
    /**
     * 新的会话持续时间。
     * 云SSO用户使用访问配置访问RD账号时，会话最多保持的时间。
     * 单位：秒。
     * 取值范围：900~43200（15分钟~12小时）。
     * @example `3600`
     */
    "NewSessionDuration"?: number;
    /**
     * 新的初始访问页面。
     * 云SSO用户使用访问配置访问RD账号时，初始访问的页面地址。
     * 该页面必须是阿里云控制台页面。
     * @example `https://cloudsso.console.aliyun.com`
     */
    "NewRelayState"?: string;
}
