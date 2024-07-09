export interface GetUserProvisioningEventRequest {
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
}
