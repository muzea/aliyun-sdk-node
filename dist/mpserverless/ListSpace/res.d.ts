export interface ListSpaceResponse {
    /**
     * 请求ID。
     * @example `B314EDAD-FFCA-536D-BA9C-08B42F7C2DDE`
     */
    RequestId: string;
    GmtCreate: string;
    /**
     * 项目总数，用于分页
     * @example `23`
     */
    Count: number;
    /**
     * 服务空间。
     */
    Spaces: {
        /**
         * 服务状态，可选值为：
         * -  IN_SERVICE：服务中。
         * - PAUSED：服务暂停。
         * @example `IN_SERVICE`
         */
        Status: string;
        /**
         * 创建时间。
         * @example `1582018007000`
         */
        GmtCreate: number;
        /**
         * 服务空间ID。
         * @example `368ef42a-763f-0000-acc2-8aa9564c****`
         */
        SpaceId: string;
        /**
         * 服务空间名称。
         * @example `myspace`
         */
        Name: string;
        /**
         * 描述。
         * @example `我的空间`
         */
        Desc: string;
        /**
         * 最后访问时间。
         * @example `1582018007000`
         */
        GmtLastAccess: number;
    }[];
}
