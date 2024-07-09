export interface UpdateServicePolicyResponse {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-****-b24c-5ac1a9a7bb9f`
     */
    SpaceId: string;
    /**
     * 请求ID。
     * @example `8932780D-9AF2-4E50-844C-13A1250918EE`
     */
    RequestId: string;
    /**
     * 策略。
     * @example `{\".write\":false,\".read\":true}`
     */
    Policy: string;
    /**
     * 策略名称。
     * @example `EXTENDED`
     */
    PolicyName: string;
    /**
     * 服务名称。
     * @example `db`
     */
    ServiceName: string;
    /**
     * 集合名称。
     * @example `test`
     */
    CollectionName: string;
}
