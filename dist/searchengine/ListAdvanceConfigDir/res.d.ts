export interface ListAdvanceConfigDirResponse {
    /**
     * 请求ID
     * @example `2AE63638-5420-56DC-BF59-37D8174039A0`
     */
    requestId: string;
    /**
     * 高级配文件列表
     */
    result: {
        /**
         * 集群名称
         * @example `hz_pre_vpc_domain_1`
         */
        name: string;
        /**
         * 绝对路径
         * @example `/path/wpd/nae`
         */
        fullPathName: string;
        /**
         * 是否为目录。取值：-true：是-false：否
         * @example `true`
         */
        isDir: boolean;
        /**
         * 是否是模板。取值：-**true**：是-**false**：否
         * @example `true`
         */
        isTemplate: boolean;
    }[];
}
