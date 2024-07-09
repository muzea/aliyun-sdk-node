export interface DescribeServicePolicyResponse {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-****-b24c-5ac1a9a7bb9f`
     */
    SpaceId: string;
    /**
     * 请求ID。
     * @example `15F08A3A-DDBC-4199-93CA-343419E81235`
     */
    RequestId: string;
    /**
     * 权限规则。
     * @example `{\".write\":false,\".read\":true}`
     */
    Policy: string;
    /**
     * 权限模式，可能取值为。
     * - PUBLICREAD: 所有用户可读，仅创建者及管理员可写。
     * - PRIVATE: 仅创建者及管理员可读写。
     * - ADMINWRITEONLY: 所有用户可读，仅管理员可写。
     * - ADMINREADWRITEONLY: 仅管理员可读写。
     * - EXTENDED: 自定义安全规则。
     * @example `ADMINWRITEONLY`
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
