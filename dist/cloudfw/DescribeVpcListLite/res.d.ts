export interface DescribeVpcListLiteResponse {
    /**
     * 返回结果的请求ID。
     * @example `55E56A55-D93A-5614-AE00-BE2F8077F891`
     */
    RequestId: string;
    /**
     * VPC信息列表。
     */
    VpcList: {
        /**
         * VPC实例ID。
         * @example `vpc-wz9dqhljd10fk0b4eh885`
         */
        VpcId: string;
        /**
         * VPC的实例名称。
         * @example `Cloud_Firewall_VPC`
         */
        VpcName: string;
        /**
         * VPC所属地域ID。
         * @example `cn-hangzhou`
         */
        RegionNo: string;
    }[];
}
