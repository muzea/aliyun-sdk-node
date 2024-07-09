export interface ListProjectLogStoresRequest {
    /**
     * 待查询的产品code。
     * @example `sas`
     */
    "SourceProdCode": string;
    /**
     * 待查询的日志code。
     * @example `cloud_siem_aegis_proc`
     */
    "SourceLogCode": string;
    /**
     * 待查询阿里云账号ID。
     * @example `123XXXXXXXX`
     */
    "SubUserId": number;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港
     * - ap-southeast-1：资产属于海外地域
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
