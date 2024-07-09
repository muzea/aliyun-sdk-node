export interface CreateAccessConfigurationRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 访问配置名称。
     * 格式：包含英文字母、数字或短划线（-）。
     * 长度：最大32个字符。
     * @example `ECS-Admin`
     */
    "AccessConfigurationName": string;
    /**
     * 访问配置的描述。
     * 长度：最大1024个字符。
     * @example `This is an access configuration.`
     */
    "Description"?: string;
    /**
     * 会话持续时间。
     * 云SSO用户使用访问配置访问RD账号时，会话最多保持的时间。
     * 单位：秒。
     * 取值范围：900~43200（15分钟~12小时）。
     * 默认值：3600（1小时）。
     * @example `3600`
     */
    "SessionDuration"?: number;
    /**
     * 初始访问页面。
     * 云SSO用户使用访问配置访问RD账号时，初始访问的页面地址。
     * 该页面必须是阿里云控制台页面。默认为空，表示跳转到阿里云控制台首页。
     * @example `https://cloudsso.console.aliyun.com`
     */
    "RelayState"?: string;
}
