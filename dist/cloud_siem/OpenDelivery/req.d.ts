export interface OpenDeliveryRequest {
    /**
     * 云产品的编码。取值：
     * - qcloud_waf
     * - qlcoud_cfw
     * - hcloud_waf
     * - hcloud_cfw
     * - ddos
     * - sas
     * - cfw
     * - config
     * - csk
     * - fc
     * - rds
     * - nas
     * - apigateway
     * - cdn
     * - mongodb
     * - eip
     * - slb
     * - vpc
     * - actiontrail
     * - waf
     * - bastionhost
     * - oss
     * - polardb
     * @example `cfw`
     */
    "ProductCode": string;
    /**
     * 云产品下的日志code，比如云安全中心的进程日志，非必填，缺失时表示云产品下的所有日志的操作。
     * @example `cloud_siem_cfw_flow`
     */
    "LogCode"?: string;
    /**
     * 视图类型。
     * - 0：当前阿里云账号视图。
     * - 1：企业下所有账号的视图。
     * @example `1`
     */
    "RoleType"?: number;
    /**
     * 管理员切换成其他成员视角的用户ID。
     * @example `113091674488****`
     */
    "RoleFor"?: number;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港，选择该项。
     * - ap-southeast-1：资产属于海外地域，选择该项。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
