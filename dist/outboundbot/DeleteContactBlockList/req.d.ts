export interface DeleteContactBlockListRequest {
    /**
     * 联系人列表id
     * @example `c6320d3c-fa45-4011-b3b1-acdfabe3a8c6`
     */
    "ContactBlockListId": string;
    /**
     * 操作人信息
     * @example `160131`
     */
    "Operator"?: string;
    /**
     * 实例id
     * @example `c6320d3c-fa45-4011-b3b1-acdfabe3a8c6`
     */
    "InstanceId": string;
}
