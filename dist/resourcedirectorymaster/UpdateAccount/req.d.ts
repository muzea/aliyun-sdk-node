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
    /**
     * 是否只预检此次请求。取值：
     * - true：发送检查请求，不会修改成员信息。检查项包括成员状态是否可以修改、成员是否具有安全信息等。如果检查不通过，则返回对应错误码。
     * - false（默认）：发送正常请求，通过检查后直接修改成员。
     * @example `false`
     */
    "DryRun"?: boolean;
}
