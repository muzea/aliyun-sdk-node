export interface DescribeMonitorResourceQuotaAttributeResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `31BC7201-00F2-47B2-B7B9-6A173076ACE`
     */
    RequestId: string;
    /**
     * 云监控的配额详情。
     */
    ResourceQuota: {
        /**
         * 云监控当前版本。取值：
         * - free：免费版。
         * - pro：专业版。
         * - cms_post：后付费。
         * @example `pro`
         */
        SuitInfo: string;
        /**
         * 预付费套餐ID。
         * @example `cms_edition-cn-n6w20rn****`
         */
        InstanceId: string;
        /**
         * 套餐到期时间。
         * @example `2021-02-28`
         */
        ExpireTime: string;
        /**
         * 站点监控ECS探测点配额。
         */
        SiteMonitorEcsProbe: {
            /**
             * 站点监控ECS探测点的总配额。
             * > 单个站点监控任务能够选择的最大ECS探测点的数量。
             * @example `5`
             */
            QuotaLimit: number;
            /**
             * 套餐包内站点监控ECS探测点的配额。
             * @example `5`
             */
            QuotaPackage: number;
            /**
             * 套餐包内站点监控ECS探测点的配额使用量。
             * > 目前已创建的所有站点监控任务的总ECS探测点数量。
             * @example `20`
             */
            QuotaUsed: number;
        };
        /**
         * 站点监控运营商探测点配额。
         */
        SiteMonitorOperatorProbe: {
            /**
             * 站点监控运营商探测点的总配额。
             * @example `5`
             */
            QuotaLimit: number;
            /**
             * 套餐包内站点监控运营商探测点的配额。
             * @example `5`
             */
            QuotaPackage: number;
            /**
             * 套餐包内站点监控运营商探测点的配额使用量。
             * @example `0`
             */
            QuotaUsed: number;
        };
        /**
         * 站点监控任务配额。
         */
        SiteMonitorTask: {
            /**
             * 站点监控任务的总配额。单位：个。
             * @example `25`
             */
            QuotaLimit: number;
            /**
             * 套餐包内站点监控任务的配额。单位：个。
             * @example `20`
             */
            QuotaPackage: number;
            /**
             * 套餐包内站点监控任务的配额使用量。单位：个。
             * @example `15`
             */
            QuotaUsed: number;
        };
        /**
         * 浏览器拨测任务数配额。
         */
        SiteMonitorBrowser: {
            /**
             * 浏览器拨测任务数的总配额。单位：个。
             * @example `50`
             */
            QuotaLimit: number;
            /**
             * 套餐内浏览器拨测任务数的配额。单位：个。
             * @example `50`
             */
            QuotaPackage: number;
            /**
             * 套餐内浏览器拨测任务数的配额用量。单位：个。
             * @example `15`
             */
            QuotaUsed: number;
        };
        /**
         * 移动端拨测任务数配额。
         */
        SiteMonitorMobile: {
            /**
             * 移动端拨测任务数配额总量。  单位：个。
             * @example `50`
             */
            QuotaLimit: number;
            /**
             * 套餐内移动端拨测任务数配额。  单位：个。
             * @example `50`
             */
            QuotaPackage: number;
            /**
             * 套餐内移动端拨测任务数配额用量。 单位：个。
             * @example `15`
             */
            QuotaUsed: number;
        };
        /**
         * 自定义监控配额。
         */
        CustomMonitor: {
            /**
             * 自定义监控时间序列的总配额。单位：个。
             * @example `1200`
             */
            QuotaLimit: number;
            /**
             * 套餐内自定义监控时间序列的配额。单位：个。
             * @example `1000`
             */
            QuotaPackage: number;
            /**
             * 套餐内自定义监控时间序列的配额用量。单位：个。
             * @example `8`
             */
            QuotaUsed: number;
        };
        /**
         * 事件监控配额。
         */
        EventMonitor: {
            /**
             * 事件监控的总配额。单位：万。
             * @example `55`
             */
            QuotaLimit: number;
            /**
             * 套餐包内事件监控的配额。单位：万。
             * @example `50`
             */
            QuotaPackage: number;
            /**
             * 套餐包内事件监控的配额用量。单位：万。
             * @example `2`
             */
            QuotaUsed: number;
        };
        /**
         * 日志监控配额。
         */
        LogMonitor: {
            /**
             * 日志监控的总配额。单位：MByte/Min。
             * @example `150`
             */
            QuotaLimit: number;
            /**
             * 套餐包内日志监控的配额。单位：MByte/Min。
             * @example `150`
             */
            QuotaPackage: number;
            /**
             * 套餐包内日志监控的配额使用量。单位：MByte/Min。
             * @example `80`
             */
            QuotaUsed: number;
        };
        /**
         * API配额。
         */
        Api: {
            /**
             * API总配额。单位：万次。
             * @example `500`
             */
            QuotaLimit: number;
            /**
             * 套餐内API的配额。单位：万次。
             * @example `500`
             */
            QuotaPackage: number;
            /**
             * 套餐内API的配额用量。单位：次。
             * @example `9987`
             */
            QuotaUsed: number;
        };
        /**
         * 报警短信包配额。
         */
        SMS: {
            /**
             * 报警短信的总配额。单位：条。
             * @example `550`
             */
            QuotaLimit: number;
            /**
             * 报警短信包的配额。单位：条。
             * @example `500`
             */
            QuotaPackage: number;
            /**
             * 报警短信包的配额使用量。单位：条。
             * @example `38`
             */
            QuotaUsed: number;
        };
        /**
         * 报警电话包配额。
         */
        Phone: {
            /**
             * 报警电话的总配额。单位：通。
             * @example `550`
             */
            QuotaLimit: number;
            /**
             * 报警电话包的配额。单位：通。
             * @example `500`
             */
            QuotaPackage: number;
            /**
             * 报警电话包的配额使用量。单位：通。
             * @example `100`
             */
            QuotaUsed: number;
        };
        /**
         * 企业云监控配额详情。
         */
        EnterpriseQuota: {
            /**
             * 企业云监控描述。
             * @example `ENTERPRISE`
             */
            SuitInfo: string;
            /**
             * 企业云监控实例ID。
             * @example `cms_enterprise_public_cn-7mz27pd****`
             */
            InstanceId: string;
        };
    };
}
