export interface DescribeDomainsBySourceResponse {
    /**
     * 请求的源站。
     * @example `example.com,aliyundoc.com`
     */
    Sources: string;
    /**
     * 请求ID。
     * @example `B0F074E5-A1AC-4B32-8EA2-6F450410D1E0`
     */
    RequestId: string;
    DomainsList: {
        /**
         * 由DomainsData组成的数组格式，返回各个源站对应的域名名称列表。
         */
        DomainsData: {
            /**
             * 请求的一个源站。
             * @example `example.com`
             */
            Source: string;
            DomainInfos: {
                /**
                 * 由domainInfo组成的列表格式，返回域名的详细信息。
                 */
                domainInfo: {
                    /**
                     * 域名状态。取值：
                     * - **applying**：审核中
                     * - **configuring**：配置中
                     * - **online**：正常运行
                     * - **stopping**：停止中
                     * - **offline**：停止
                     * - **disabling**：删除中
                     * @example `online`
                     */
                    Status: string;
                    /**
                     * 更新时间。
                     * @example `2017-03-31T04:49:00+08:00`
                     */
                    UpdateTime: string;
                    /**
                     * 创建时间。
                     * @example `2016-07-12T11:53:19+08:00`
                     */
                    CreateTime: string;
                    /**
                     * CNAME。
                     * @example `***.alikunlun.com`
                     */
                    DomainCname: string;
                    /**
                     * 加速域名的业务类型。取值：
                     * - **web**：图片小文件。
                     * - **download**：大文件下载。
                     * - **video**：视音频点播。
                     * @example `web`
                     */
                    CdnType: string;
                    /**
                     * 域名。
                     * @example `example.org`
                     */
                    DomainName: string;
                }[];
            };
            Domains: {
                /**
                 * 由domainNames组成的列表格式，返回单个域名对应的域名名称列表。
                 */
                domainNames: string[];
            };
        }[];
    };
}
