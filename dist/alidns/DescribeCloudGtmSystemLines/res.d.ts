export interface DescribeCloudGtmSystemLinesResponse {
    SystemLines: {
        /**
         * 系统线路列表。
         */
        SystemLine: {
            /**
             * 线路code。
             * @example `aliyun_r_ap-south-1`
             */
            Code: string;
            /**
             * 线路父级code。
             * @example `String	aliyun`
             */
            ParentCode: string;
            /**
             * 线路是否可以作为解析请求来源被选中：
             * - true：可被选中；
             * - false：不可被选中；
             * @example `true`
             */
            IsAvailable: boolean;
            /**
             * 线路展示名称。
             * @example `华北_河北`
             */
            DisplayName: string;
            /**
             * 线路名称。
             * @example `河北`
             */
            Name: string;
        }[];
    };
    /**
     * 唯一请求识别码。
     * @example `389DFFA3-77A5-4A9E-BF3D-147C6F98A5BA`
     */
    RequestId: string;
    /**
     * 系统线路树状结构数据，线路很多，此处不一一列举。
     * @example `"SystemLinesTree":"[{\"displayName\":\"默认\",\"id\":\"default\",\"isAvailable\":true,\"name\":\"默认\",\"parentId\":\"\"}`
     */
    SystemLinesTree: string;
}
