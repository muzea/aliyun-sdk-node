export interface ListSecurityGroupResponse {
    /**
     * Id of the request
     * @example `316F5F64-F73D-42DC-8632-01E308B6****`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据结构。
     */
    Data: {
        /**
         * 安全组ID。
         * @example `sg-8vb8gsmrqyc35k645rk6`
         */
        SecurityGroupId: string;
        /**
         * 安全组名称。
         * @example `sg2`
         */
        SecurityGroupName: string;
        /**
         * VPC ID。
         * @example `vpc-bp1b`
         */
        VpcId: string;
        /**
         * 安全组类型，分为普通安全组与企业安全组。取值范围：
         * - normal：普通安全组。
         * - enterprise：企业安全组。更多详情，请参见[企业安全组概述](~~120621~~)。
         * @example `enterprise`
         */
        SecurityGroupType: string;
    }[];
}
