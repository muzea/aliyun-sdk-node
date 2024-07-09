export interface AssociateRoomRequest {
    /**
     * 质检应用 ID
     * @example `5bbfb884-1186-4d48-906b-88d586770f6b`
     */
    "AppId": string;
    /**
     * 部门 ID
     * @example `5bbfb884-1186-4d48-906b-88d586770f6b`
     */
    "DepartmentId"?: string;
    /**
     * mrtc 房间 ID
     * @example `5500707344661`
     */
    "RoomId": string;
    /**
     * 客户端版本
     * @example `1.0.002`
     */
    "ClientVersion"?: string;
    /**
     * 客户端基础参数，记录 SDK 版本号等信息
     * @example `{"version":"1.0.0"}`
     */
    "ClientBaseParam"?: string;
}
