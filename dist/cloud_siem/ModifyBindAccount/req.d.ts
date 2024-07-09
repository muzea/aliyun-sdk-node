export interface ModifyBindAccountRequest {
    /**
     * 云账号的AccessKeyId。
     * @example `ABCXXXXXXXXX`
     */
    "AccessId"?: string;
    /**
     * 多云账号名称。
     * @example `sas_account_xxx`
     */
    "AccountName"?: string;
    /**
     * 绑定记录ID。ListBindAccount接口返回的BindId。
     * @example `123`
     */
    "BindId": number;
    /**
     * 云账号ID。
     * @example `123xxxxxxx`
     */
    "AccountId": string;
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
