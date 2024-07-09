export interface QueryCallInTransferRecordRequest {
    /**
     * 呼转号码。
     * @example `400****`
     */
    "PhoneNumber": string;
    /**
     * 呼入主叫。
     * @example `150****0000`
     */
    "CallInCaller"?: string;
    /**
     * 查询时间。格式：YYYY-MM-DD hh:mm:ss。
     * > 查询结果为当天的所有的呼转记录。
     * @example `2021-06-28 00:00:00`
     */
    "QueryDate": string;
    /**
     * 页码。默认取值为**1**。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 页数。取值范围：**1~10**。
     * @example `10`
     */
    "PageSize": number;
}
