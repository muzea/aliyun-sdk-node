export interface ListOfficeSiteOverviewResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 办公网络信息集合。
     */
    OfficeSiteOverviewResults: {
        /**
         * 办公网络状态。
         * @example `REGISTERED`
         */
        OfficeSiteStatus: string;
        /**
         * 办公网络内云电脑的总数。
         * @example `1`
         */
        TotalEdsCount: number;
        /**
         * 云电脑池中的云电脑的总数。
         * @example `1`
         */
        TotalEdsCountForGroup: number;
        /**
         * 办公网络内即将过期的云电脑数量。
         * @example `0`
         */
        WillExpiredEdsCount: number;
        /**
         * 云电脑池中即将过期的云电脑数量。
         * @example `0`
         */
        WillExpiredEdsCountForGroup: number;
        /**
         * 办公网络ID。
         * @example `cn-hangzhou+dir-363353****`
         */
        OfficeSiteId: string;
        /**
         * 办公网络内正在运行中的云电脑数量。
         * @example `1`
         */
        RunningEdsCount: number;
        /**
         * 云电脑池中正在运行的云电脑数量。
         * @example `1`
         */
        RunningEdsCountForGroup: number;
        /**
         * 办公网络名称。
         * @example `test`
         */
        OfficeSiteName: string;
        /**
         * 办公网络VPC网络类型。
         * @example `standard`
         */
        VpcType: string;
        /**
         * 办公网络内已过期的云电脑数量。
         * @example `0`
         */
        HasExpiredEdsCount: number;
        /**
         * 云电脑池中已过期的云电脑数量。
         * @example `0`
         */
        HasExpiredEdsCountForGroup: number;
        /**
         * 办公网络所属的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
