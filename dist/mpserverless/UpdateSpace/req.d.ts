export interface UpdateSpaceRequest {
    /**
     * 服务空间ID。
     * @example `826061c4-5095-4550-8b74-3bcd9af*****`
     */
    "SpaceId": string;
    /**
     * 服务空间描述信息。
     * @example `我的第一个服务空间。`
     */
    "Desc"?: string;
    /**
     * 服务状态，可选值为：
     * -  IN_SERVICE：服务中。
     * - PAUSED：服务暂停。
     * @example `IN_SERVICE`
     */
    "Status"?: string;
}
