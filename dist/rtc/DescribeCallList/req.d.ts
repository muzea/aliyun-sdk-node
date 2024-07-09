export interface DescribeCallListRequest {
    /**
     * APP ID。
     * @example `testappid`
     */
    "AppId": string;
    /**
     * 查询的开始时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615806196`
     */
    "StartTs": number;
    /**
     * 查询的结束时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615892596`
     */
    "EndTs": number;
    /**
     * 频道ID。
     * @example `311`
     */
    "ChannelId"?: string;
    /**
     * 用户ID。
     * @example `c906531af5f9****`
     */
    "UserId"?: string;
    /**
     * 通信状态。取值：
     * - **IN**：进行中。
     * - **OUT**：已结束。
     * @example `OUT`
     */
    "CallStatus"?: string;
    /**
     * 排序字段。取值：
     * - **BAD_EXP_USER_COUNT_DESC**：按体验欠佳人数降序。
     * - **BAD_EXP_USER_COUNT_ASC**：按体验欠佳人数升序。
     * @example `BAD_EXP_USER_COUNT_DESC`
     */
    "OrderBy"?: string;
    /**
     * 查询模式。取值：
     * - **ALL**：全部通话。
     * - **FOLLOW**：关注通话。
     * @example `ALL`
     */
    "QueryMode"?: string;
    /**
     * 页码。最小1， 最大200。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 每页数量，最小1， 最大200。
     * @example `10`
     */
    "PageSize": number;
}
