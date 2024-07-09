export interface DescribeSiteMonitorQuotaResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `请求成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `26860260-76C6-404E-AB7A-EB98D36A6885`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 配额。
     */
    Data: {
        /**
         * 非阿里巴巴探测点配额。默认值：0。
         * @example `0`
         */
        SiteMonitorOperatorQuotaQuota: number;
        /**
         * 是否开启秒级监控。取值：
         * - true：开启。
         * - false：关闭。
         * @example `false`
         */
        SecondMonitor: boolean;
        /**
         * 站点监控探测任务配额使用数。
         * @example `6`
         */
        SiteMonitorQuotaTaskUsed: number;
        /**
         * 站点监控探测任务配额。
         * @example `10`
         */
        SiteMonitorTaskQuota: number;
        /**
         * 站点监控版本。取值：
         * - V1：老版本。
         *
         * - V2：新版本。
         * @example `V1`
         */
        SiteMonitorVersion: string;
        /**
         * 阿里巴巴探测点配额。免费配额5个。
         * @example `5`
         */
        SiteMonitorIdcQuota: number;
    };
}
