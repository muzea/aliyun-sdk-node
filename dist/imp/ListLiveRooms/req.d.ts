export interface ListLiveRoomsRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 直播状态。取值：
     * * **0**：已创建，未开始直播。
     * * **1**：直播中。
     * * **2**：直播结束。
     * * **3或空**：所有状态。
     * @example `3`
     */
    "Status"?: number;
    /**
     * 查询页码，从1开始，参数为空默认查询第1页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示个数，最大支持50，参数为空默认显示个数为10。
     * @example `10`
     */
    "PageSize"?: number;
}
