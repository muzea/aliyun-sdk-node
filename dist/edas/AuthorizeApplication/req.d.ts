export interface AuthorizeApplicationRequest {
    /**
     * 待授权子账号或RAM用户的USER ID，格式为`子账号名称@主账号UID`。
     * @example `test@133434434****`
     */
    "TargetUserId": string;
    /**
     * 应用ID。用半角分号（;）分割，null表示取消授权。
     * @example `5fdf50e8-*****;696-******`
     */
    "AppIds": string;
}
