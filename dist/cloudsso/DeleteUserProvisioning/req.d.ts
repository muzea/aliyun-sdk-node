export interface DeleteUserProvisioningRequest {
    /**
     * 目录ID。
     * @example `d-003qew84****`
     */
    "DirectoryId": string;
    /**
     * RAM用户同步的ID。
     * @example `up-002axzhapcbz6e63****`
     */
    "UserProvisioningId": string;
    /**
     * 删除策略。删除RAM用户同步时，对已同步的RAM用户的处理策略。取值：
     * - Delete：删除。删除RAM用户同步时，会删除从云SSO已经同步到RAM中的RAM用户。
     * - Keep：保留。删除RAM用户同步时，会保留从云SSO已经同步到RAM中的RAM用户。
     * > 该参数置空时，将采用创建RAM用户同步时设置的删除策略。
     * @example `Delete`
     */
    "DeletionStrategy"?: string;
}
