export interface DescribeAssetGroupToInstanceResponse {
    /**
     * 总记录条数。
     * @example `1`
     */
    Total: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C73C59B9-9F5C-57FF-A394-13EC8FC3B2FF`
     */
    RequestId: string;
    /**
     * 返回的信息列表。
     */
    DataList: {
        /**
         * DDoS原生防护实例ID。
         * @example `ddosbgp-cn-7212zaa5v***
        `
         */
        InstanceId: string;
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
        /**
         * 资产组所属成员账号UID。
         * @example `170858869679****
        `
         */
        MemberUid: string;
    }[];
}
