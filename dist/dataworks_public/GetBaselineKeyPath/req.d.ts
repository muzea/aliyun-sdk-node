export interface GetBaselineKeyPathRequest {
    /**
     * 基线的ID。
     * @example `1234`
     */
    "BaselineId": number;
    /**
     * 业务日期，需要使用yyyy-MM-dd'T'HH:mm:ssZ的UTC格式。
     * @example `2020-07-07T00:00:00+0800`
     */
    "Bizdate": string;
    /**
     * 基线实例周期号。天基线为1，小时基线的取值范围为\[1,24\]。
     * @example `1`
     */
    "InGroupId": number;
}
