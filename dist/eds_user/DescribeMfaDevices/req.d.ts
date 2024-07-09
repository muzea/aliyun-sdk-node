export interface DescribeMfaDevicesRequest {
    /**
     * 返回结果的最大数量。取值范围：1~500。
     * 默认值：100。
     * @example `100`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证。取值为上一次API调用时返回的NextToken参数值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 便捷用户的用户名。
     * @example `test`
     */
    "EndUserIds"?: string[];
    /**
     * 虚拟MFA设备序列号，唯一标识。
     * @example `c2d9ae94-a64b-4a0d-8024-9519ca50****`
     */
    "SerialNumbers"?: string[];
    /**
     * AD工作区地址。
     * @example `cn.misumi.pri`
     */
    "AdDomain"?: string;
}
