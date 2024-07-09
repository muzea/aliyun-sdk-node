export interface BindAccountRequest {
    /**
     * 云账号ACCESS_KEY_ID。
     * @example `ABCXXXXXXXX`
     */
    "AccessId": string;
    /**
     * 多云账号名称。
     * @example `xxxx`
     */
    "AccountName": string;
    /**
     * 云账号ID。
     * @example `123xxxxxxx`
     */
    "AccountId": string;
    /**
     * 多云的code。取值：
     * - aliyun：阿里云
     * - hcloud：华为云
     * - qcloud：腾讯云
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
