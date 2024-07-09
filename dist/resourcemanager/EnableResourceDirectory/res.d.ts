export interface EnableResourceDirectoryResponse {
    /**
     * 资源目录信息。
     */
    ResourceDirectory: {
        /**
         * 资源目录ID。
         * @example `rd-54****`
         */
        ResourceDirectoryId: string;
        /**
         * 管理账号ID。
         * @example `507408460615****`
         */
        MasterAccountId: string;
        /**
         * 管理账号名称。
         * @example `alice@example.com`
         */
        MasterAccountName: string;
        /**
         * Root资源夹ID。
         * @example `r-G9****`
         */
        RootFolderId: string;
        /**
         * 资源目录开通时间。
         * @example `2021-12-08T02:15:31.744Z`
         */
        CreateTime: string;
    };
    /**
     * 请求ID。
     * @example `EC2FE94D-A4A2-51A1-A493-5C273A36C46A`
     */
    RequestId: string;
}
