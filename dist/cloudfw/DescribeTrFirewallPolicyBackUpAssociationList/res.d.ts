export interface DescribeTrFirewallPolicyBackUpAssociationListResponse {
    /**
     * 恢复路由表列表。
     */
    PolicyAssociationBackupConfigs: {
        /**
         * 引流实例类型。
         * @example `VPC`
         */
        CandidateType: string;
        /**
         * 引流实例ID。
         * @example `vpc-wz9grb8ng3y7h7lf2****`
         */
        CandidateId: string;
        /**
         * 恢复路由表ID。
         * @example `vtb-wz9slp3s7m4qrzvnq****`
         */
        OriginalRouteTableId: string;
        /**
         * 引流后路由表。
         * @example `vtb-wz9898grickmh5j09****`
         */
        CurrentRouteTableId: string;
        /**
         * 引流实例名称。
         * @example `VPC引流实例`
         */
        CandidateName: string;
    }[];
    /**
     * 返回结果的请求ID。
     * @example `C264A756-9B48-57E3-B312-716941E146C6`
     */
    RequestId: string;
}
