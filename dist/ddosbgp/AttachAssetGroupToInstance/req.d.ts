export interface AttachAssetGroupToInstanceRequest {
    /**
     * DDoS原生防护实例所在地域ID。
     * > 您可以调用[DescribeRegions](~~118703~~)查询DDoS原生防护支持的所有地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要查询的DDoS原生防护实例的ID。
     * > 您可以调用[DescribeInstanceList](~~118698~~)查询所有DDoS原生防护实例的ID。
     * @example `ddosbgp-cn-n6w1r7nz****`
     */
    "InstanceId": string;
    /**
     * 要绑定的资产组信息。
     */
    "AssetGroupList": {
        /**
         * 要添加的资产实例ID。对于WAF，指WAFf的实例ID。
         * @example `waf-test-001`
         */
        Name: string;
        /**
         * 资产组类型。
         * @example `waf`
         */
        Type: string;
        /**
         * 资产实例所属的地域ID。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 资产组所属成员账号UID。
         * @example `1743970208320***`
         */
        MemberUid: string;
    }[];
}
