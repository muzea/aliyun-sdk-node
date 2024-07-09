export interface UnbindRequest {
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType": string;
    /**
     * 用户名。
     * @example `alice`
     */
    "EndUserId": string;
    /**
     * 交付组ID。可调用[GetConnectionTicket](https://help.aliyun.com/zh/wuying-appstreaming/developer-reference/api-appstream-center-2021-09-01-getconnectionticket)接口获取。
     * @example `aig-9ciijz60n4xsv****`
     */
    "AppInstanceGroupId": string;
    /**
     * 持久会话ID。可调用[GetConnectionTicket](https://help.aliyun.com/zh/wuying-appstreaming/developer-reference/api-appstream-center-2021-09-01-getconnectionticket)接口获取。
     * @example `p-0bxls9m3cl7s****`
     */
    "AppInstancePersistentId"?: string;
    /**
     * 会话ID。可调用[GetConnectionTicket](https://help.aliyun.com/zh/wuying-appstreaming/developer-reference/api-appstream-center-2021-09-01-getconnectionticket)接口获取。
     * @example `ai-d297eyf83g5ni****`
     */
    "AppInstanceId"?: string;
}
