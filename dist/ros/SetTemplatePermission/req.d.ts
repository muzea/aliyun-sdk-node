export interface SetTemplatePermissionRequest {
    /**
     * 共享选项。
     * 取值：
     * - ShareToAccounts：共享给其他阿里云账号。
     * - CancelSharing：取消共享。
     * @example `ShareToAccounts`
     */
    "ShareOption": string;
    /**
     * 共享版本选项。当ShareOption为ShareToAccounts时生效。
     * 取值：
     * - AllVersions（默认值）：共享模板所有版本。
     * - Latest：只共享模板最新版本。模板版本增加时，共享的版本也随之变化，始终保持最新版本。
     * - Current：只共享模板当前版本。模板版本增加时，共享的版本不变。
     * - Specified：只共享模板指定的单个版本。
     * @example `Specified`
     */
    "VersionOption"?: string;
    /**
     * 共享的模板版本。当ShareOption为ShareToAccounts，且VersionOption为Specified时生效。
     * 取值范围：v1~v100。
     * @example `v1`
     */
    "TemplateVersion"?: string;
    /**
     * 模板ID。
     * @example `5ecd1e10-b0e9-4389-a565-e4c15efc****`
     */
    "TemplateId": string;
    /**
     * 共享或取消共享的阿里云账号。
     * N的取值范围：1~5。
     * > - 不支持为同一阿里云账号和阿里云账号中的RAM用户共享或取消共享模板。
     * > - 当ShareOption为CancelSharing时，支持指定星号（*），表示取消所有共享。
     * @example `151266687691****`
     */
    "AccountIds": string[];
}
