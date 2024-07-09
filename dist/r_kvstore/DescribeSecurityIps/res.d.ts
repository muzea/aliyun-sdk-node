export interface DescribeSecurityIpsResponse {
    /**
     * 请求ID。
     * @example `EFC9161F-15E3-4A6E-8A99-C09916D1****`
     */
    RequestId: string;
    SecurityIpGroups: {
        /**
         * 实例的IP白名单分组信息。
         */
        SecurityIpGroup: {
            /**
             * IP白名单分组属性，默认为空。
             * > **hidden**分组表示经用户授权后，系统（DAS、DMS、DTS等）自动生成的白名单分组，此类白名单分组不支持修改、删除操作。
             * @example `hidden`
             */
            SecurityIpGroupAttribute: string;
            /**
             * IP白名单分组下的IP列表，最多1000个。
             * @example `100.100.202.***​/24,10.10.10.***`
             */
            SecurityIpList: string;
            /**
             * IP白名单分组的名称。
             * @example `default`
             */
            SecurityIpGroupName: string;
        }[];
    };
}
