export interface SubmitJobsRequest {
    /**
     * 需要接入的日志配置，json数组格式。<br>
     *  - SourceProdCode：产品code。
     *  - SourceLogCode：日志code。
     *  - Deleted：接入/取消接入日志。
     *       - 0：接入日志 。
     *       - 1： 取消接入日志。
     * @example `[{"SourceLogCode":"cloud_siem_aegis_health_check","SourceProdCode":"sas","SubUserId":120xxxxxxx,"Deleted":0},{"SourceLogCode":"cloud_siem_aegis_health_check","SourceProdCode":"sas","SubUserId":121xxxxxxxx,"Deleted":0},{"SourceLogCode":"cloud_siem_aegis_health_check","SourceProdCode":"sas","SubUserId":122xxxxxxx,"Deleted":1}]`
     */
    "JsonParam": string;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港
     * - ap-southeast-1：资产属于海外地域
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
