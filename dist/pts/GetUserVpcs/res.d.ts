export interface GetUserVpcsResponse {
    /**
     * 总条数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * VPC列表。
     */
    Vpcs: {
        /**
         * 专有网络ID。
         * @example `vpc-uf6gc56wdjpafoiwej6adqb4qn72xtw`
         */
        VpcId: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * VPC名称。
         * @example `shanghai-vpc`
         */
        VpcName: string;
        /**
         * VPC的IPv4网段。
         * @example `172.16.80.0/20`
         */
        CidrBlock: string;
        /**
         * VPC的描述信息。
         * @example `空`
         */
        Description: string;
        /**
         * VPC所属的资源组ID。
         * @example `rg-acfm3fzmgkehpewjertna`
         */
        ResourceGroupId: string;
        /**
         * 交换机列表。
         */
        VSwitchIds: string[];
        /**
         * 路由表ID列表。
         */
        RouterTableIds: string[];
    }[];
    /**
     * 请求ID。
     * @example `CEE46204-E1CF-5F48-B094-67362DD4B73F`
     */
    RequestId: string;
    /**
     * 错误提示信息，若成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 每页显示记录条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页查询时设置的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
