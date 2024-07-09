export interface DescribeDBClusterAccessWhiteListResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    Items: {
        /**
         * IP白名单分组列表。
         */
        IPArray: {
            /**
             * 白名单分组属性，默认为空。
             * > 控制台不显示带有**hidden**属性的分组，带有该标签的分组通常是用于访问DTS、DRDS服务的。
             * @example `hidden`
             */
            DBClusterIPArrayAttribute: string;
            /**
             * IP白名单分组下的IP列表，最多1000个，以英文逗号（,）隔开。
             * @example `127.0.0.1`
             */
            SecurityIPList: string;
            /**
             * IP白名单分组名称。
             * - IP白名单分组名称以小写字母开头、以数字或小写字母结尾，可包含小写字母、数字及’_’，长度为2~32。
             * - 单个集群最多支持50个白名单分组。
             * @example `test`
             */
            DBClusterIPArrayName: string;
        }[];
    };
}
