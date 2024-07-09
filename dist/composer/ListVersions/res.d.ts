export interface ListVersionsResponse {
    /**
     * 该工作流包含的版本总数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `ADB97A33-50E7-48A5-963D-ACBAE36D0BEC`
     */
    RequestId: string;
    /**
     * 版本列表
     */
    Versions: {
        /**
         * 该版本最后更新时间
         * @example `2018-12-12T07:36:22.992Z`
         */
        UpdateTime: string;
        /**
         * 该版本的状态，**Enabled**表示启用中
         * @example `Enabled`
         */
        VersionStatus: string;
        /**
         * 版本创建时间
         * @example `2018-12-12T07:36:22.992Z`
         */
        CreateTime: string;
        /**
         * 版本ID
         * @example `ve-uf6bwdtvid7o25`
         */
        VersionId: string;
        /**
         * 版本号
         * @example `1`
         */
        VersionNumber: number;
        /**
         * 该版本所属的工作流ID
         * @example `lc-uf6axpwfcw4ubx`
         */
        FlowId: string;
        /**
         * 版本名称
         * @example `1`
         */
        VersionName: string;
    }[];
}
