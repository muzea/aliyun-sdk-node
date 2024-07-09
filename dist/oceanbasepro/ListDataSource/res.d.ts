export interface ListDataSourceResponse {
    /**
     * 是否调用成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误详情。
     */
    ErrorDetail: {
        /**
         * 错误码（新）。
         * @example `CM-RESOAT1111`
         */
        Code: string;
        /**
         * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
         * @example `ERROR`
         */
        Level: string;
        /**
         * 错误描述（新）。
         * @example `A system error occurred.`
         */
        Message: string;
        /**
         * 用于填充 Message 中的占位符。
         */
        ExtraContext: any;
        /**
         * 错误信息的 Key。
         * @example `null`
         */
        MessageMcmsKey: string;
        /**
         * 用于填充 MessageMcmsKey 中的占位符。
         */
        MessageMcmsContext: any;
        /**
         * 错误原因。
         * @example `null`
         */
        Reason: string;
        /**
         * 错误原因的 Key。
         * @example `null`
         */
        ReasonMcmsKey: string;
        /**
         * 错误原因的上下文。
         */
        ReasonMcmsContext: any;
        /**
         * 建议（新）。
         * @example `null`
         */
        Proposal: string;
        /**
         * 建议内容的 Key。
         * @example `null`
         */
        ProposalMcmsKey: string;
        /**
         * 建议内容的上下文。
         */
        ProposalMcmsContext: any;
        /**
         * 上游错误详情，用于处理 HTTP 请求。
         * @example `null`
         */
        UpstreamErrorDetail: any;
    };
    /**
     * 错误码（旧）。
     * @example `INNER_ERROR`
     */
    Code: string;
    /**
     * 错误描述（旧）。
     * @example `A system error occurred.`
     */
    Message: string;
    /**
     * 建议（旧）。
     * @example `Contact the administrator. `
     */
    Advice: string;
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 页序号，分页查询时生效。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页大小，分页查询时生效。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数，分页查询时生效。
     * @example `132`
     */
    TotalCount: number;
    /**
     * 请求耗时，单位为秒。
     * @example `28`
     */
    Cost: string;
    /**
     * 数据源列表的相关信息。
     */
    Data: {
        /**
         * 数据源终端标识。
         * @example `e_4w****v`
         */
        Id: string;
        /**
         * 数据源的名称。
         * @example `RATION***1DBUTF11`
         */
        Name: string;
        /**
         * 数据源的类型。
         * @example `MYSQL_PUBLIC`
         */
        Type: string;
        /**
         * 数据源的角色，包括 `MASTER` 和  `SLAVE`。
         * @example `MASTER`
         */
        Role: string;
        /**
         * 数据源的 Owner。
         * @example `admin`
         */
        Owner: string;
        /**
         * 数据库租户的名称或 ID。
         * @example `tenant_name`
         */
        Tenant: string;
        /**
         * 数据库租户所在集群的名称或 ID。
         * @example `cluster_name`
         */
        Cluster: string;
        /**
         * 数据库的名称。填写后，仅对该数据库进行数据迁移或数据同步。
         * @example `schema_name`
         */
        Schema: string;
        /**
         * 用户申请公有云 VPC 的唯一 ID。
         * @example `vpc_t4***`
         */
        VpcId: string;
        /**
         * 数据库宿主机的 IP 地址。
         * @example `xxx.xxx.xxx.1`
         */
        Ip: string;
        /**
         * 数据库宿主机 IP 的端口号。
         * @example `2883`
         */
        Port: number;
        /**
         * 用于数据迁移或数据同步的数据库用户的名称。
         * @example `user_name`
         */
        UserName: string;
        /**
         * 数据源所属的地域。
         * @example `cn-beijing`
         */
        Region: string;
        /**
         * 数据源的备注信息，不能超过 128 个字符。
         * @example `test`
         */
        Description: string;
        /**
         * Oracle 数据库的 SID。
         * @example `null`
         */
        OracleSid: string;
        /**
         * `nls_length_semantics` 属性，仅针对 Oracle 和 OceanBase 数据库 Oracle 租户数据源。
         * @example `null`
         */
        OracleNlsLengthSemantics: string;
        /**
         * 操作系统。OceanBase 数据源没有该参数。
         * @example `Linux`
         */
        OperatingSystem: string;
        /**
         * 版本。
         * @example `4.1.0`
         */
        Version: string;
        /**
         * 时区。
         * @example `+08:00`
         */
        Timezone: string;
        /**
         * 字符编码。
         * @example `utf8mb4`
         */
        Charset: string;
        /**
         * 资源所有者。
         * @example `178641****05809`
         */
        ResourceOwner: string;
        /**
         * 数据源的创建时间，以 UTC + 0 时区的时间格式展示。
         * @example `2023-07-13T20:27:28.000+00:00`
         */
        GmtCreate: string;
        /**
         * 数据源的修改时间，以 UTC + 0 时区的时间格式展示。
         * @example `2023-07-13T20:37:28.000+00:00`
         */
        GmtModified: string;
        /**
         * 对应主备库的 ID。
         * @example `null`
         */
        PartnerId: string;
        /**
         * 连接额外属性。具体返回字段请参见《附录》模块的内容。
         * @example `null`
         */
        ConnExtraAttributes: any;
    }[];
}
