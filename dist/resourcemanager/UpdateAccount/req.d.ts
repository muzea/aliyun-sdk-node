export interface UpdateAccountRequest {
    /**
     * 新的成员名称。
     * > `NewDisplayName`与`NewAccountType`任选其一设置，不能同时设置。
     * @example `admin`
     */
    "NewDisplayName"?: string;
    /**
     * 新的成员类型。取值：
     * - ResourceAccount：将指定的云账号切换为资源账号。
     * - CloudAccount：将指定的资源账号切换为云账号。
     * > `NewDisplayName`与`NewAccountType`任选其一设置，不能同时设置。
     * @example `ResourceAccount`
     */
    "NewAccountType"?: string;
    /**
     * 成员ID。
     * @example `12323344****`
     */
    "AccountId": string;
}
