export interface InitResourceDirectoryResponse {
    /**
     * 请求ID。
     * @example `CD76D376-2517-4924-92C5-DBC52262F93A`
     */
    RequestId: string;
    /**
     * 资源目录信息。
     */
    ResourceDirectory: {
        /**
         * Root资源夹ID。
         * @example `r-Zo****`
         */
        RootFolderId: string;
        /**
         * 资源目录ID。
         * @example `rd-Ss****`
         */
        ResourceDirectoryId: string;
        /**
         * 资源目录开通时间。
         * @example `2019-02-18T15:32:10.473Z`
         */
        CreateTime: string;
        /**
         * 企业管理账号ID。
         * @example `172841235500****`
         */
        MasterAccountId: string;
        /**
         * 企业管理账号名称。
         * @example `aliyun-****`
         */
        MasterAccountName: string;
    };
}
