export interface ListDatabaseAccessPointResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `C9ADD2AA-27E3-5D62-A676-092EDC5303C1`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: string;
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 报错信息。
     * @example `Gateway exception, please launch local dg first`
     */
    ErrorMsg: string;
    /**
     * 个数。
     * @example `1`
     */
    Count: number;
    /**
     * 数据库访问点列表。
     */
    DbInstanceAccessPointList: {
        /**
         * 访问点IP。
         * @example `10.0.0.0`
         */
        AccessAddr: string;
        /**
         * 访问点端口。
         * @example `33306`
         */
        AccessPort: number;
        /**
         * 数据库实例ID。
         * @example `dg-db-n2a285spnpy3****
        `
         */
        DbInstanceId: string;
        /**
         * 创建网关的时间。
         * @example `2023-03-09 14:20:04.0`
         */
        GmtCreate: number;
        /**
         * 修改时间
         * @example `2023-03-09 14:20:04.0`
         */
        GmtModified: number;
        /**
         * 网关ID。
         * @example `dg-nmz841r7b681****`
         */
        RouterId: string;
        /**
         * 访问点可用区ID。
         * @example `cn-hangzhou-j`
         */
        VpcAzoneId: string;
        /**
         * 访问点所在VPC的ID。
         * @example `vpc-2ze0612ts436tn0sh****`
         */
        VpcId: string;
        /**
         * 访问点所在VSW的ID。
         * @example `vsw-8vbgi74rgel72rax4****`
         */
        VswitchId: string;
    }[];
}
