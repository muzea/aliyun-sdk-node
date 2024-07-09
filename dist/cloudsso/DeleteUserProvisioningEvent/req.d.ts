export interface DeleteUserProvisioningEventRequest {
    /**
     * RAM用户同步事件ID。
     * 您可以调用[ListUserProvisioningEvents](~~2636305~~)获取`EventId`。
     * @example `upe-wjKyNDmZvyZOiRcJ****`
     */
    "EventId": string;
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
}
