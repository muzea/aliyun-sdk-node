export interface DeleteBindAccountRequest {
    /**
     * 绑定ID。可调用[ListBindAccount](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854&activeTabKey=api|ListBindAccount)获取绑定ID。
     * @example `10`
     */
    "BindId"?: number;
    /**
     * 云账号ID。
     * @example `123xxxxxxx`
     */
    "AccountId": string;
    /**
     * 云账号AccessKeyId。
     * @example `ABCXXXXXXXX`
     */
    "AccessId": string;
    /**
     * 多云的code。取值：
     * - qcloud：腾讯云。
     * - aliyun：阿里云。
     * - hcloud：华为云
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
