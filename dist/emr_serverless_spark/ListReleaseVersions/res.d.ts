export interface ListReleaseVersionsResponse {
    /**
     * 版本列表
     */
    releaseVersions: {
        /**
         * 版本号
         * @example `esr-2.1 (Spark 3.3.1, Scala 2.12, Java Runtime)`
         */
        releaseVersion: string;
        /**
         * 版本状态
         * @example `ONLINE`
         */
        state: string;
        /**
         * 版本类型
         * @example `stable`
         */
        type: string;
        /**
         * iaas层类型
         * @example `ASI`
         */
        iaasType: string;
        /**
         * 创建时间。
         * @example `1716215854101`
         */
        gmtCreate: number;
        /**
         * scala版本
         * @example `2.12`
         */
        scalaVersion: string;
        /**
         * 社区spark版本号
         * @example `Spark 3.3.1`
         */
        communityVersion: string;
        /**
         * cpu架构列表
         */
        cpuArchitectures: string[];
    }[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
    /**
     * 下一页TOKEN。
     * @example `1`
     */
    nextToken: string;
    /**
     * 一次获取的最大记录数。
     * @example `20`
     */
    maxResults: number;
    /**
     * 记录总数。
     * @example `200`
     */
    totalCount: number;
}
