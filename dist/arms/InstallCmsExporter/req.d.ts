export interface InstallCmsExporterRequest {
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId": string;
    /**
     * cms-exporter启动参数，表示需要监控哪些云产品。多个云产品之间用`#`分割。
     * @example `hologres#cen`
     */
    "CmsArgs"?: string;
    /**
     * 是否采集云产品相关aliyun tag标签，可选参数，默认false。
     * @example `false`
     */
    "EnableTag"?: boolean;
    /**
     * 最近监控的云产品。多个云产品之间用`#`分割。
     * @example `hologres#cen`
     */
    "DirectArgs": string;
}
