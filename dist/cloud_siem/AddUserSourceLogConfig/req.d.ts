export interface AddUserSourceLogConfigRequest {
    /**
     * 产品code。
     * @example `sas`
     */
    "SourceProdCode"?: string;
    /**
     * 日志code。
     * @example `cloud_siem_aegis_proc`
     */
    "SourceLogCode"?: string;
    /**
     * 需要接入日志的阿里云账号ID。
     * @example `123XXXXXX`
     */
    "SubUserId": number;
    /**
     * 需要接入日志的详细SLS信息，json格式。
     * @example `{"project":"wafnew-project-1335759343513432-cn-hangzhou","logStore":"wafnew-logstore","regionCode":"cn-hangzhou","prodCode":"waf"}`
     */
    "SourceLogInfo": string;
    /**
     * 需要接入日志的详细SLS信息。
     * @example `cn-shanghai.siem-project.siem-logstore`
     */
    "DisPlayLine"?: string;
    /**
     * 添加接入或删除接入。取值：
     *  - -1：删除接入
     *  - 0：添加接入
     * @example `0`
     */
    "Deleted"?: number;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港
     * - ap-southeast-1：资产属于海外地域
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
