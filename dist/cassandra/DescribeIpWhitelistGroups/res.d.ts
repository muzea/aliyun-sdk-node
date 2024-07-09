export interface DescribeIpWhitelistGroupsResponse {
    /**
     * 请求ID。
     * @example `391A6933-0D4A-42EB-BCE7-03DA59D69ED4`
     */
    RequestId: string;
    Groups: {
        /**
         * 白名单组列表。
         */
        Group: {
            /**
             * IP版本，可选值：4/6。
             * @example `4`
             */
            IpVersion: number;
            /**
             * 白名单组名。
             * @example `group_one`
             */
            GroupName: string;
            IpList: {
                IP: string[];
            };
        }[];
    };
}
