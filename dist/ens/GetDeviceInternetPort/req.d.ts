export interface GetDeviceInternetPortRequest {
    /**
     * 实例ID，为板卡ID/容器ID，仅支持单个查询。
     * @example `i-5s6xbnx9srb3vm6tp9hg9o64e`
     */
    "InstanceId": string;
    /**
     * NAT类型。枚举类型，取值范围：
     * - SNAT
     * - DNAT
     * @example `DNAT`
     */
    "NatType": string;
    /**
     * 规则ID，不传的话为查询全部。
     * @example `snat-5ref5fc1l1xgqnpjzrtw1hw5a`
     */
    "RuleId"?: string;
}
