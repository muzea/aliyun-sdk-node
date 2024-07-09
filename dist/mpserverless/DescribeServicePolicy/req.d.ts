export interface DescribeServicePolicyRequest {
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
     * 集合名称。该参数非必填，且仅在**serviceName**为**db**时有意义。
     * @example `test`
     */
    "CollectionName"?: string;
}
