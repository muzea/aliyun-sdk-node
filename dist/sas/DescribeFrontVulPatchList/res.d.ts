export interface DescribeFrontVulPatchListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F929E952-EBFC-56C3-BD35-BF8B59024C68`
     */
    RequestId: string;
    /**
     * 查询到的Windows漏洞前置补丁的信息。
     */
    FrontPatchList: {
        /**
         * 服务器UUID。
         * @example `1587bedb-fdb4-48c4-9330-4545****`
         */
        Uuid: string;
        /**
         * 服务器对应的Windows漏洞前置补丁的列表。
         */
        PatchList: {
            /**
             * Windows漏洞前置补丁的补丁号。
             * @example `4523204`
             */
            Name: string;
            /**
             * 漏洞名称。
             * @example `RHBA-2019:2599: krb5 bug fix update`
             */
            AliasName: string;
        }[];
    }[];
}
