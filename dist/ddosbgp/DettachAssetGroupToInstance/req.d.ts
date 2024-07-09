export interface DettachAssetGroupToInstanceRequest {
    /**
     * DDoS原生防护实例所属地域ID。
     * > 您可以调用[DescribeRegions](~~118703~~)查询DDoS原生防护支持的所有地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要删除绑定的DDoS原生防护实例的ID。
     * > 您可以调用[DescribeInstanceList](~~118698~~)查询所有DDoS原生防护实例的ID。
     * @example `ddosbgp-xxx`
     */
    "InstanceId": string;
    /**
     * 要删除的资产组信息。
     */
    "AssetGroupList": {
        /**
         * 资产组名称。对于WAF，指WAF的实例ID。
         * @example `waf_v2_public_cn-lbj382l****`
         */
        Name: string;
        /**
         * 资产组类型。取值：
         * - **waf**：表示WAF资产。
         * - **ga**：表示GA资产。
         * @example `waf`
         */
        Type: string;
        /**
         * 资产组所属的地域。
         * @example `cn-hangzhou`
         */
        Region: string;
    }[];
}
