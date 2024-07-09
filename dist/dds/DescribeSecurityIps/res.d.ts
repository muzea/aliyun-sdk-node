export interface DescribeSecurityIpsResponse {
    /**
     * 默认分组中包含的IP白名单。
     * @example `47.xxx.xxx.xx,100.xxx.xxx.0/24`
     */
    SecurityIps: string;
    /**
     * 请求ID。
     * @example `FC724D23-2962-479E-ABB1-606C935AE7FD`
     */
    RequestId: string;
    SecurityIpGroups: {
        /**
         * IP白名单分组列表。
         */
        SecurityIpGroup: {
            /**
             * 分组名。
             * @example `default`
             */
            SecurityIpGroupName: string;
            /**
             * IP白名单分组属性，默认为空。
             * @example ` hidden`
             */
            SecurityIpGroupAttribute: string;
            /**
             * 分组中包含的IP白名单列表。
             * @example `47.xxx.xxx.xx,100.xxx.xxx.0/24`
             */
            SecurityIpList: string;
        }[];
    };
}
