export interface AddDataSourceRequest {
    /**
     * 云账号ID。
     * @example `123xxxxxxxx`
     */
    "AccountId"?: string;
    /**
     * 数据源类型。取值：
     *  - obs：华为云obs。
     *  - wafApi：腾讯云waf下载api。
     *  - ckafka： 腾讯云ckafka。
     * @example `obs`
     */
    "DataSourceType"?: string;
    /**
     * 数据源名称。
     * @example `XX北京kafka`
     */
    "DataSourceInstanceName"?: string;
    /**
     * 数据源备注。
     * @example `XX云云防火墙上海实例`
     */
    "DataSourceInstanceRemark"?: string;
    /**
     * 数据源参数，json数组格式。
     * @example `[{"paraCode":"region_code","paraValue":"ap-guangzhou"}]`
     */
    "DataSourceInstanceParams"?: string;
    /**
     * 多云的code。
     * @example `hcloud`
     */
    "CloudCode": string;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港
     * - ap-southeast-1：资产属于海外地域
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
