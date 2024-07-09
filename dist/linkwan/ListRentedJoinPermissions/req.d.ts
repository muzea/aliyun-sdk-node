export interface ListRentedJoinPermissionsRequest {
    "IotInstanceId"?: string;
    /**
     * 模糊匹配入网凭证拥有者的阿里云账号ID。
     * @example `some-user`
     */
    "FuzzyOwnerAliyunId"?: string;
    /**
     * 模糊匹配入网凭证使用的JoinEUI。
     * @example `d896e0`
     */
    "FuzzyJoinEui"?: string;
    /**
     * 按照凭证的启停用状态进行过滤。**true**表示启用，**false**表示停用。
     * @example `false`
     */
    "Enabled"?: boolean;
    /**
     * 根据入网凭证是否关联到节点分组进行过滤。**true**表示已关联，**false**表示未关联。
     * @example `false`
     */
    "BoundNodeGroup"?: boolean;
    /**
     * 按照入网凭证的类型进行过滤，取值：
     * - **LOCAL**：专用凭证
     * - **ROAMING**：泛在凭证
     * @example `LOCAL`
     */
    "Type"?: string;
    /**
     * 模糊匹配入网凭证的名称。
     * @example `凭证1`
     */
    "FuzzyJoinPermissionName"?: string;
    /**
     * 本次查询的起始位置，从 0 开始。
     * @example `0`
     */
    "Offset": number;
    /**
     * 本次查询的入网凭证数量的上限，大于等于 1。
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
     * @example `false`
     */
    "Ascending"?: boolean;
}
