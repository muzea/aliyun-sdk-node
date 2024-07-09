export interface GetWebHostingStatusResponse {
    /**
     * 唯一请求ID。
     * @example `D8F7FDDC-4EF3-44B9-9452-CFD7A081FB85`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 功能开通状态，可能取值如下：
         * - UNUSED：未开通。
         * - OPENING：开通中。
         * - IN_SERVICE：已开通。
         * @example `OPENING`
         */
        Status: string;
        /**
         * 服务空间ID。
         * @example `0e16bb12-14af-4635-b24c-5ac1a9a*****`
         */
        SpaceId: string;
    };
}
