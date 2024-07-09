export interface AssignPrivateIpAddressRequest {
    /**
     * 地域ID。
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 网卡ID。
     * @example `lni-bp18exxqa2rvfn45e5pz`
     */
    "NetworkInterfaceId": string;
    /**
     * 所属灵骏子网。
     * @example `subnet-f3zfzmnc`
     */
    "SubnetId": string;
    /**
     * 辅助私网IP地址。
     * @example `10.0.6.194`
     */
    "PrivateIpAddress"?: string;
    /**
     * 描述信息
     * @example `test测试`
     */
    "Description"?: string;
    /**
     * 是否分配mac地址。
     * @example `true`
     */
    "AssignMac"?: boolean;
    /**
     * 默认值是false。值为true时可以加速辅助私网IP申请流程。
     * > 具体使用方法请提工单咨询。
     * @example `false`
     */
    "SkipConfig"?: boolean;
    /**
     * popApi 默认不忽略，幂等使用
     */
    "ClientToken"?: string;
}
