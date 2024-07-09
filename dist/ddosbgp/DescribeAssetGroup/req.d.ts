export interface DescribeAssetGroupRequest {
    /**
     * DDoS原生防护实例所在地域ID。
     * > 您可以调用[DescribeRegions](~~118703~~)查询DDoS原生防护支持的所有地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 资产组名称。对于WAF，指WAF的实例ID。
     * @example `waf_v2_public_cn-lbj382l****`
     */
    "Name"?: string;
    /**
     * 资产组类型。取值：
     * - **waf**：表示WAF资产。
     * - **ga**：表示GA资产。
     * @example `waf`
     */
    "Type": string;
    /**
     * 资产实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "Region": string;
}
