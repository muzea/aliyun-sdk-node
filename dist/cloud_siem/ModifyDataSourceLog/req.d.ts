export interface ModifyDataSourceLogRequest {
    /**
     * 日志code。
     * @example `cloud_siem_waf_xxxxx`
     */
    "LogCode"?: string;
    /**
     * 云账号ID。
     * @example `123xxxxxxx`
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
     * 数据源ID，由威胁分析根据具体参数计算md5生成。
     * 可调用[DescribeDataSourceInstance](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854&activeTabKey=api|DescribeDataSourceInstance)获取数据源ID。
     * @example `ef33097c9d1fdb0b9c7e8c7ca320pkl1`
     */
    "DataSourceInstanceId": string;
    /**
     * 数据源参数详情，json数组格式。
     * @example `[{"LogCode":"cloud_siem_qcloud_waf_alert_log","LogParas":"[{\"ParaCode\":\"api_name\",\"ParaValue\":\"GetAttackDownloadRecords\"}]"}]`
     */
    "DataSourceInstanceLogs": string;
    /**
     * 日志ID，由威胁分析根据具体参数计算md5生成。可调用[ListDataSourceLogs](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854&activeTabKey=api|ListDataSourceLogs)获取日志ID。
     * @example `ef33097c9d1fdb0b9c7e8c7ca320pkl1`
     */
    "LogInstanceId": string;
    /**
     * 多云的code。取值：
     * - qcloud：腾讯云。
     * - aliyun：阿里云。
     * - hcloud：华为云。
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
