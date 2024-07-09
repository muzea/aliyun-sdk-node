export interface ResetUserPasswordRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 用户ID。
     * @example `u-00q8wbq42wiltcrk****`
     */
    "UserId": string;
    /**
     * 新密码。
     * 格式：必须包含大写英文字母、小写英文字母、数字、特殊符号每种至少各一个。
     * 长度：8~32个字符。
     * > 当`GenerateRandomPassword`为`False`时，您需要设置`Password`。
     * @example `uc)XK$?ictf72CKFDy9vtWaFmISl****`
     */
    "Password"?: string;
    /**
     * 是否自动生成密码。取值：
     * - True：自动生成密码。
     * - False（默认值）：手动设置密码。
     * @example `True`
     */
    "GenerateRandomPassword"?: boolean;
    /**
     * 用户下次登录时是否需要重置密码。取值：
     * - True：需要重置。
     * - False（默认值）：不需要重置。
     * @example `False`
     */
    "RequirePasswordResetForNextLogin"?: boolean;
}
