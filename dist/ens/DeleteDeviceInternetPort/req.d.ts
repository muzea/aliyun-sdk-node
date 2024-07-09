export interface DeleteDeviceInternetPortRequest {
    /**
     * 实例ID，为板卡ID/容器ID。
     * @example `i-5scdmgpdegymqyugf85q66l1a`
     */
    "InstanceId": string;
    /**
     * 规则ID。
     * @example `snat-5rfzxah5gzfo869fl6epvon3y`
     */
    "RuleId": string;
    /**
     * NAT类型。枚举类型，取值范围：
     * - SNAT
     * - DNAT
     * @example `DNAT`
     */
    "NatType": string;
}
