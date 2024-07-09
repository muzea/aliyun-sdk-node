export interface SaveContactBlockListRequest {
    /**
     * json格式的字符串
     * @example `{}`
     */
    "ContactBlockListsJson"?: string;
    /**
     * 实例id
     * @example `c3c92de8-e4bd-4db4-a962-50f8acce40bc`
     */
    "InstanceId"?: string;
    /**
     * 联系人信息列表
     * @example `[]`
     */
    "ContactBlockListList"?: string[];
}
