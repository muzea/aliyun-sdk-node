export interface SearchDriveRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间名称
         * @example `我的个人空间`
         */
        drive_name: string;
        /**
         * 异步调用的返回个数。默认返回100个，取值范围\[1,100]。
         * @example `100`
         */
        limit: number;
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。
         * <br>默认值：无
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        marker: string;
        /**
         * 归属者
         * @example `c9b7a5aa04d14ae3867fdc886fa01da4`
         */
        owner: string;
        /**
         * 归属者类型，可选值如下：
         * user：用户
         * group：团队
         * @example `user`
         */
        owner_type: string;
    };
}
