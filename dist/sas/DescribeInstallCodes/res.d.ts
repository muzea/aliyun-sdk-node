export interface DescribeInstallCodesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C0D6119F-92EE-1276-B8B6-C81A7F9D57F5`
     */
    RequestId: string;
    /**
     * 安装命令信息。
     */
    InstallCodes: {
        /**
         * 是否镜像安装。取值：
         * - **true**：是
         * - **false**：否
         * @example `false`
         */
        OnlyImage: boolean;
        /**
         * 手动安装云安全中心Agent的安装验证码。
         * @example `15v02r`
         */
        CaptchaCode: string;
        /**
         * 服务器所属分组的ID。
         * @example `9165712`
         */
        GroupId: number;
        /**
         * 服务器所属分组的名称。
         * @example `default`
         */
        GroupName: string;
        /**
         * 安装命令到期的时间戳，单位为毫秒。
         * @example `1637810007000`
         */
        ExpiredDate: number;
        /**
         * 服务器供应商的名称。
         * @example `ALIYUN`
         */
        VendorName: string;
        /**
         * 服务器的操作系统。取值：
         * - **linux**：Linux。
         * - **windows**：Windows。
         * @example `linux`
         */
        Os: string;
        /**
         * 代理集群名。
         * @example `proxy_test`
         */
        ProxyCluster: string;
    }[];
}
