export interface DescribeDBMiniEngineVersionsResponse {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `EFB6083A-7699-489B-8278-C0CB4793A96E`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumbers: number;
    /**
     * 每页记录数。
     * @example `10`
     */
    MaxRecordsPerPage: number;
    /**
     * 小版本列表。
     */
    MinorVersionItems: {
        /**
         * 小版本发布说明的URL。
         * @example `https://example.com`
         */
        ReleaseNote: string;
        /**
         * 小版本对应的实例系列。返回值：
         * * **Basic**：基础系列。
         * * **HighAvailability**：高可用系列。
         * * **Finance**：三节点企业系列。
         * @example `HighAvailability`
         */
        NodeType: string;
        /**
         * 内部参数，无需关注。
         * @example `True`
         */
        IsHotfixVersion: boolean;
        /**
         * 小版本对应的数据库引擎。
         * @example `MySQL`
         */
        Engine: string;
        /**
         * 发布类型。返回值：
         * * **LTS**：长期支持版本。
         * * **BETA**：预览版本。
         * @example `BETA`
         */
        ReleaseType: string;
        /**
         * 内核版本下线状态。返回值如下：
         * - **Offline**：下线
         * - **Online**：在线
         * > 下线状态为Offline时，表示版本已下线，此时忽略过期状态。下线状态为Online时，过期状态为expired，表示版本已超过生命周期；过期状态为vaild，表示版本仍在生命周期内。
         * @example `Online`
         */
        StatusDesc: string;
        /**
         * 小版本对应的数据库版本。
         * @example `5.7`
         */
        EngineVersion: string;
        /**
         * 小版本的版本号。
         * @example `rds_20220731`
         */
        MinorVersion: string;
        /**
         * 内核小版本对应的社区小版本，您可在[AliPG内核小版本发布记录](~~126002~~)中查看更多详情。
         * > 该参数当前仅适用于**PostgreSQL**。
         * @example `13.6`
         */
        CommunityMinorVersion: string;
        /**
         * 内核小版本对应的标签。返回值如下：
         * - **pgsql\_docker_image**：通用实例标签。
         * - **pgsql\_babelfish_image**：Babelfish实例标签。
         * > 当前仅**PostgreSQL**返回该值。
         * @example `pgsql_babelfish_image`
         */
        Tag: string;
        /**
         * 内核版本过期状态。返回值如下：
         * - **vaild**：有效
         * - **expired**：过期
         * > 下线状态为Offline时，表示版本已下线，此时忽略过期状态。下线状态为Online时，过期状态为expired，表示版本已超过生命周期；过期状态为vaild，表示版本仍在生命周期内。
         * @example `vaild`
         */
        ExpireStatus: string;
        /**
         * 内核小版本过期时间。
         * @example `20231213`
         */
        ExpireDate: string;
    }[];
}
