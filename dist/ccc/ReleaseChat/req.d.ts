export interface ReleaseChatRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId"?: string;
    /**
     * 话务ID。
     * @example `chat-6538214103685****`
     */
    "JobId": string;
    /**
     * 用户类型。
     * - CUSTOMER : 访客
     * - AGENT： 坐席
     * @example `CUSTOMER`
     */
    "UserType": string;
    /**
     * 用户ID。访客ID或坐席ID。
     * @example `edbcf95a-ef9f-4296-a0a6-985ac9e36db3`
     */
    "UserId"?: string;
    /**
     * 网络业务的渠道Token。
     * @example `9XYGTGWtq2wFi_Bpg7aUnIoYi_vG_rO3bjEn0YtsxbHRHrYHlz1LDBLJAyZcLxieRQR4h_6AnWvTjJeNU5jg************Hwej7WgWrmA=`
     */
    "Token"?: string;
}
