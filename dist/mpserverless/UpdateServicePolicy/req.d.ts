export interface UpdateServicePolicyRequest {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-****-b24c-5ac1a9a7bb9f`
     */
    "SpaceId": string;
    /**
     * 服务名称。可选值：
     *  - db
     *  - file
     * @example `db`
     */
    "ServiceName": string;
    /**
     * 权限规则，当**PolicyName**为**EXTENDED**时必填。
     * @example `{\".write\":false,\".read\":true}`
     */
    "Policy"?: string;
    /**
     * 集合名称，当**ServerName**为**db**时该参数必填。
     * @example `test`
     */
    "CollectionName"?: string;
    /**
     * 策略名称，当**ServerName**为**db**时该参数必填。可选值：
     * - PUBLICREAD: 所有用户可读，仅创建者及管理员可写。适用场景：如用户评论、公开信息等。
     * - PRIVATE: 仅创建者及管理员可读写。适用场景：商品信息等。
     * - ADMINWRITEONLY: 所有用户可读，仅管理员可写。适用场景：商品信息等。
     * - ADMINREADWRITEONLY: 仅管理员可读写。适用场景：后台数据流水、日志等。
     * - EXTENDED: 自定义安全规则。
     * @example `EXTENDED`
     */
    "PolicyName"?: string;
}
