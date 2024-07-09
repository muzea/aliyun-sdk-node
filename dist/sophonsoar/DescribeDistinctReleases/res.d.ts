export interface DescribeDistinctReleasesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `145CACF6-D276-5197-8549-CB1AD76E2AC8`
     */
    RequestId: string;
    /**
     * 版本记录信息。
     */
    Records: {
        /**
         * 版本的描述信息。
         * @example `demo version`
         */
        Description: string;
        /**
         * 版本的XML配置的MD5值。
         * @example `17cf53049bc8efa941207xxxxx`
         */
        TaskflowMd5: string;
        /**
         * 剧本的配置格式。
         * - **xml**：XML格式。
         * - **x6**：JSON格式。
         * @example `x6`
         */
        TaskflowType: string;
    }[];
}
