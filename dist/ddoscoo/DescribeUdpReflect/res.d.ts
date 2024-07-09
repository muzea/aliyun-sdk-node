export interface DescribeUdpReflectResponse {
    /**
     * 本次请求的ID。
     * @example `F97A8766-FB4D-411A-9CD5-2CFF701B592F`
     */
    RequestId: string;
    /**
     * 被UDP反射攻击防护策略过滤的反射源端口列表。
     */
    UdpSports: string[];
}
