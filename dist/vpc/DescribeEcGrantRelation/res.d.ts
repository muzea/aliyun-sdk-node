export interface DescribeEcGrantRelationResponse {
    /**
     * 请求ID。
     * @example `E6E90F6B-2B41-5AAF-ABEB-236ADBAAD91D`
     */
    RequestId: string;
    /**
     * 查询授权关系的结果列表。
     */
    EcGrantRelations: {
        /**
         * VBR实例所属的阿里云账号（主账号）ID。
         * @example `1210123456123456`
         */
        VbrOwnerUid: number;
        /**
         * 查询的授权关系的VBR实例ID。
         * @example `vbr-m5ex0xf63xk8s5bob****`
         */
        VbrInstanceId: string;
        /**
         * 查询的授权关系的VPC实例ID。
         * @example `vpc-bp1brjuegjc88v3u9****`
         */
        InstanceId: string;
        /**
         * 查询的授权关系的VPC所属阿里云账号（主账号）ID。
         * @example `1250123456123456`
         */
        AliUid: number;
        /**
         * 查询的授权关系VPC所在地域ID。
         * @example `cn-hangzhou`
         */
        RegionNo: string;
        /**
         * 查询授权关系的结果。取值：
         * - **Created**：VPC实例与VBR实例已有授权关系。
         * -  **Deleted**：VPC实例与VBR实例没有授权关系。
         * @example `Created`
         */
        Status: string;
        /**
         * 查询的授权关系的VPC名称。
         * @example `VPCname`
         */
        InstanceName: string;
        /**
         * 查询的授权关系的VPC路由器ID。
         * @example `vrt-bp1i0yzgjd8ra05ec****`
         */
        InstanceRouterId: string;
        /**
         * 查询的授权关系的VBR实例所在地域ID。
         * @example `cn-hangzhou`
         */
        VbrRegionNo: string;
        /**
         * VPC实例对VBR实例的授权时间。
         * @example `2022-09-02T11:46Z`
         */
        GmtCreate: string;
        /**
         * 接受授权的VBR实例的范围。取值：
         * - **All**：将VPC实例授权给指定地域和阿里云账号（主账号）下的所有VBR实例。
         * - **Specify**：将VPC实例授权给指定VBR实例。
         * @example `All`
         */
        GrantType: string;
    }[];
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 查询的结果数。
     * @example `1`
     */
    Count: number;
    /**
     * 列表的页码。
     * @example `1`
     */
    Page: number;
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
}
