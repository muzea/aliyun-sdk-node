export interface DescribeDeviceOnlineInfoRequest {
    /**
     * iovcc项目工程ID。
     * @example `sghghshr`
     */
    "ProjectId": string;
    /**
     * 查询条件类型。取值：
     * - deviceToken
     * - deviceId
     * - iasToken
     * - iasId
     * @example `deviceId`
     */
    "Type": string;
    /**
     * 查询对象。
     * 表示查询条件类型的对应值。
     * @example `c86b36f1d19c488f9ae3798f332b9fd5`
     */
    "Value": string;
}
