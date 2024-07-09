export interface GetAdvancedSearchFileResponse {
    /**
     * 请求ID。
     * @example `9366FE45-3C83-54FB-8BB1-44176B200706`
     */
    RequestId: string;
    /**
     * 下载文件信息。
     */
    ResourceSearch: {
        /**
         * 下载文件地址。
         * @example `https://cloud-config-compliance-report.oss-cn-shanghai.aliyuncs.com/RESOURCE_INVENTORY/100931896542****​/100931896542****-ca-edd3626622af00b3****-RESOURCE_INVENTORY-202307021509.csv?Expires=1688285356&OSSAccessKeyId=STS.NTZPodS8bkxTU6ngo5mhq****&Signature=NnR4zYcrxbo5C6ZeL9R5lnV****%3D&security-token=CAISiQJ1q6Ft5B2yfSjIr5fvG9XQvudD3Lq%2FVxDfg29gYeddu6PJ1Dz2IHhOf3JuAOoWt%2Fk%2Fm2tY5%2FYTlr14T5hYSXvPas1%2B75tg6g67fYvKtpQURUzBccT3d1KIAjvXgeXwAYygPv6%2FF96pb1fb7FwRpZLxaTSlWXG8LJSNkuQJR98LXw6%2BH1EkbZUsUWkEksIBMmbLPvuAKwPjhnGqbHBloQ1hk2hym8%2Fdq4%2B%2BkkOD0wemkbNK%2BdypfsL9M5ZWUc0hA4vv7otfbbHc1SNc0R9O%2BZptgbZMkTW95YnHWAIPuk%2FWareErYY%2FfV8ofNYzH69Vsf73kvt2u%2BPJmpzw0QpXOuVYQ%2B86lBIna0auGoABQ8il9J0ua1FPyYcqnYW7ssNlWrYWSGwIECqAhyYZEcKqIPb8l%2Bo%2BE%2BoR9zYVgaEyB9b7euxJzpRR0%2B1yh8r%2BUmgYx3J4mvbxkH79AG8bfgarzgqFsx1Tusee20s5bvJkgpX2tjSBZQhNnb8d09AWR%2BPUTZ5ecU0u8BhnA4S****%3D`
         */
        DownloadUrl: string;
        /**
         * 下载文件生成状态。取值：
         * - CREATING：生成中。
         * - COMPLETE：生成完成。
         * @example `COMPLETE`
         */
        Status: string;
        /**
         * 下载文件生成的时间戳。
         * 单位：毫秒。
         * @example `1688281755480`
         */
        ResourceInventoryGenerateTime: number;
    };
}
