export interface SubmitImportLogTasksRequest {
    /**
     * 产品的code。
     * @example `qcloud_waf`
     */
    "ProdCode": string;
    /**
     * 提交接入的日志列表，json数组格式。
     * @example `["cloud_siem_qcloud_cfw_alert_log"]`
     */
    "LogCodes"?: string;
    /**
     * 提交接入的账号列表，json数组格式。取值：
     *  - AccountId：待接入的账号ID。
     *  - Imported：是否接入/取消接入该账号。取值：
     *    - 0：取消接入。
     *    - 1：接入。
     * @example `[{"AccountId":"123123","Imported":1}]`
     */
    "Accounts"?: string;
    /**
     * 是否自动接入配置了该日志的账号。取值：
     *  - 1：自动接入。
     *  - 0：不自动接入。
     * @example `1`
     */
    "AutoImported"?: number;
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
