export interface DescribePopApiVersionListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `DBCDB0E1-4D0E-55A9-A44D-A62ADE7E2FDA`
     */
    RequestId: string;
    /**
     * 阿里云产品接口的POP CODE。
     * @example `Sas`
     */
    PopCode: string;
    /**
     * 总记录条数。
     * @example `100`
     */
    Total: number;
    /**
     * 接口的版本列表。
     */
    VersionList: {
        /**
         * 阿里云产品接口的POP CODE。
         * @example `Sas`
         */
        PopCode: string;
        /**
         * 阿里云产品接口的版本号。
         * @example `2018-12-03`
         */
        Version: string;
        /**
         * 阿里云产品接口的名称。
         * @example `DescribePopApiVersionList`
         */
        ApiName: string;
    }[];
}
