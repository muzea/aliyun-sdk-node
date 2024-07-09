export interface ListNodesByOwnedJoinPermissionIdRequest {
    "IotInstanceId"?: string;
    /**
     * 入网凭证ID。
     * @example `123`
     */
    "JoinPermissionId": string;
    /**
     * 模糊匹配节点的DevEUI。
     * @example `d896e0`
     */
    "FuzzyDevEui"?: string;
    /**
     * 本次查询的起始位置，从0开始。
     * @example `0`
     */
    "Offset": number;
    /**
     * 本次查询的节点数量上限，大于等于1。
     * @example `2`
     */
    "Limit": number;
    /**
     * 指定排序字段，可取值为**CREATED_MILLIS**, 表示根据创建时间排序。
     * @example `CREATED_MILLIS`
     */
    "SortingField"?: string;
    /**
     * 配合**SortingField**参数一起使用，**true**表示升序，**false**表示降序。
     * @example `true`
     */
    "Ascending"?: boolean;
}
