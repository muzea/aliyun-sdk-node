export interface DescribeLogAnalysisResponse {
    /**
     * 该地域日志转储信息总量。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 每个分页包含的日志转储信息数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `C84F77AF-3DE5-48F1-B19B-37FCBE24****`
     */
    RequestId: string;
    /**
     * 日志转储信息的分页页码。
     * @example `1`
     */
    PageNumber: number;
    Analyses: {
        /**
         * 日志转储信息集合。
         */
        Analysis: {
            /**
             * 文件系统ID。
             * @example `0c7154xxxx`
             */
            MetaKey: string;
            /**
             * 指定文件系统对应的日志转储信息。
             */
            MetaValue: {
                /**
                 * NAS访问日志服务所使用的角色。
                 * @example `acs:ram::162165525211xxxx:role/aliyunnaslogarchiverole`
                 */
                RoleArn: string;
                /**
                 * 文件系统操作日志专属Logstore所在地域。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 用于存储NAS操作日志的专属Logstore名称。
                 * @example `nas-nfs`
                 */
                Logstore: string;
                /**
                 * 文件系统操作日志专属Logstore所在的Project名称。
                 * @example `nas-1746495857602745-cn-hangzhou`
                 */
                Project: string;
            };
        }[];
    };
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
}
