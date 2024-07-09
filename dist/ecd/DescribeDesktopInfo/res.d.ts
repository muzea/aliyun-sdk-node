export interface DescribeDesktopInfoResponse {
    /**
     * 请求ID。
     * @example `062B1439-709A-580E-85DF-CE97A1560565`
     */
    RequestId: string;
    /**
     * 云电脑基础信息。
     */
    Desktops: {
        /**
         * 云电脑镜像版本号。
         * @example `1.4.0-R-***`
         */
        CurrentAppVersion: string;
        /**
         * 云电脑首次启动时间。
         * @example `2020-11-06T08:31Z`
         */
        StartTime: string;
        /**
         * 用户的连接状态。
         * @example `Disconnected`
         */
        ConnectionStatus: string;
        /**
         * 云电脑ID。
         * @example `ecd-gx2x1dhsmucyy****`
         */
        DesktopId: string;
        /**
         * 云电脑状态。
         * @example `Running`
         */
        DesktopStatus: string;
        /**
         * 管理标识。
         */
        ManagementFlag: string[];
        /**
         * 云电脑可升级的镜像版本号。
         * @example `1.6.0-R-***`
         */
        NewAppVersion: string;
        /**
         * 可升级的镜像版本描述。
         * @example `测试升级包03-07
        `
         */
        ReleaseNote: string;
        /**
         * 升级包大小，单位为KB。
         * @example `568533470`
         */
        NewAppSize: number;
        /**
         * 云电脑池ID。
         * @example `dg-3uiojcc0j4kh7****`
         */
        DesktopGroupId: string;
    }[];
}
