export interface GetAccountRequest {
    /**
     * 成员ID。
     * @example `181761095690****`
     */
    "AccountId": string;
    /**
     * 是否返回标签信息。取值：
     * - false（默认值）：不返回。
     * - true：返回。
     * @example `true`
     */
    "IncludeTags"?: boolean;
}
