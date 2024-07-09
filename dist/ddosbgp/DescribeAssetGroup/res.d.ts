export interface DescribeAssetGroupResponse {
    /**
     * 总数量。
     * @example `2`
     */
    Total: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `487EC0F7-8D14-504E-914E-3A1BC314B581`
     */
    RequestId: string;
    /**
     * 要查询的资产组信息。
     */
    AssetGroupList: {
        /**
         * 资产组名称。
         * @example `waf_v2_public_cn-lbj382l****`
         */
        Name: string;
        /**
         * 资产组类型。
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
