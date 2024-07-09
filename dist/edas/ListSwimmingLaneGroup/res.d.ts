export interface ListSwimmingLaneGroupResponse {
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `BF238E37-671A-5045-B49A-0B29C166****`
     */
    RequestId: string;
    /**
     * 泳道组列表数据。
     */
    Data: {
        /**
         * 微服务空间ID。
         * @example `cn-shanghai:daily`
         */
        NamespaceId: string;
        /**
         * 泳道组名称。
         * @example `name`
         */
        Name: string;
        /**
         * 泳道组ID。
         * @example `257`
         */
        Id: number;
        /**
         * 泳道组涉及应用列表。
         */
        ApplicationList: {
            /**
             * 应用名称。
             * @example `java-app`
             */
            AppName: string;
            /**
             * 应用ID。
             * @example `406073bf-afc2-4142-b3d7-629a0308****`
             */
            AppId: string;
        }[];
        /**
         * EDAS入口/网关信息。
         */
        EntryApplication: {
            /**
             * 应用名称。
             * @example `java-app`
             */
            AppName: string;
            /**
             * 数据来源，需配置为EDAS。
             * @example `EDAS`
             */
            Source: string;
            /**
             * 应用ID。
             * @example `406073bf-afc2-4142-b3d7-629a0308****`
             */
            AppId: string;
        };
    }[];
}
