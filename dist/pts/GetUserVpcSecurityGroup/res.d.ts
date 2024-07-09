export interface GetUserVpcSecurityGroupResponse {
    /**
     * 安全组数量。
     * @example `9`
     */
    SecurityGroupCount: number;
    /**
     * 安全组列表。
     */
    SecurityGroupList: {
        /**
         * 专有网络ID。
         * @example `vpc-uf6tar2ohlasdhsatjln37h30bv`
         */
        VpcId: string;
        /**
         * 安全组描述信息。
         * @example `空`
         */
        Description: string;
        /**
         * 安全组 ID。
         * @example `sg-bp16bt3zuugxpfjkasdfvthxth8`
         */
        SecurityGroupId: string;
        /**
         * 安全组名。
         * @example `my-security-group`
         */
        SecurityGroupName: string;
    }[];
    /**
     * 请求ID。
     * @example `61B15017-1A68-5C47-834F-87E2BBC44F2C`
     */
    RequestId: string;
    /**
     * 错误提示信息，如成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 第几页。
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
