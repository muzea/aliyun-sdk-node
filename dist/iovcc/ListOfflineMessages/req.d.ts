export interface ListOfflineMessagesRequest {
    /**
     * 分页查询每页数据集数量。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * iovcc项目工程ID。
     * @example `sfgsghd6`
     */
    "ProjectId": string;
    /**
     * 离线箱查询类型。取值：**deviceId**、**kp**。
     * @example `deviceId`
     */
    "Type": string;
    /**
     * **deviceId**或者**kp**(iasId)对应的值。
     * @example `fc71429ddd9b473c81d7ef5f33ab10cc`
     */
    "Value": string;
    /**
     * 分页查询页码。
     * @example `1`
     */
    "PageIndex"?: number;
}
