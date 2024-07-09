export interface UpdateUserRequest {
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
     * 用户的名。
     * @example `Alice`
     */
    "NewFirstName"?: string;
    /**
     * 用户的姓。
     * @example `Lee`
     */
    "NewLastName"?: string;
    /**
     * 用户的显示名称。
     * @example `AliceLee`
     */
    "NewDisplayName"?: string;
    /**
     * 用户的描述。
     * @example `This is a user.`
     */
    "NewDescription"?: string;
    /**
     * 用户的电子邮箱。
     * @example `AliceLee@example.com`
     */
    "NewEmail"?: string;
}
