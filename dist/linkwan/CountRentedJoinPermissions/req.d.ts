export interface CountRentedJoinPermissionsRequest {
    /**
     * 模糊匹配入网凭证拥有者的阿里云账号ID。
     * @example `some-user`
     */
    "FuzzyOwnerAliyunId"?: string;
    /**
     * 模糊匹配入网凭证的JoinEUI。
     * @example `d896e0`
     */
    "FuzzyJoinEui"?: string;
    /**
     * 按照凭证的启停用状态进行过滤。
     * @example `true`
     */
    "Enabled"?: boolean;
    /**
     * 根据入网凭证是否关联到节点分组进行过滤。
     * **true**表示已关联，**false**表示未关联。
     * @example `true`
     */
    "BoundNodeGroup"?: boolean;
    /**
     * 按照凭证的类型进行过滤。取值：
     * - **LOCAL**：专用凭证
     * - **ROAMING**：泛在凭证
     * @example `LOCAL`
     */
    "Type"?: string;
    /**
     * 模糊匹配入网凭证的名称。
     * @example `test`
     */
    "FuzzyJoinPermissionName"?: string;
}
