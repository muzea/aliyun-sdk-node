export interface DescribeDBInstanceIPArrayListResponse {
    /**
     * 请求ID。
     * @example `E2B6AF71-DC32-4055-B477-43B348798D10`
     */
    RequestId: string;
    Items: {
        /**
         * IP白名单分组列表。
         */
        DBInstanceIPArray: {
            /**
             * 白名单分组属性，默认为空。
             * >控制台不显示带有hidden属性的分组，带有该标签的分组通常是用于访问DTS等服务的。
             * @example `hidden`
             */
            DBInstanceIPArrayAttribute: string;
            /**
             * IP白名单分组名称。
             * @example `rds_default`
             */
            DBInstanceIPArrayName: string;
            /**
             * IP地址的类型。
             * @example `IPv4`
             */
            SecurityIPType: string;
            /**
             * IP白名单分组下的IP列表。
             * @example `192.168.XX.XX/24`
             */
            SecurityIPList: string;
        }[];
    };
}
