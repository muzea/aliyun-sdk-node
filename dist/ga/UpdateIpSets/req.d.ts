export interface UpdateIpSetsRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 加速地域列表。
     */
    "IpSets": {
        /**
         * 要修改的加速地域带宽。单位：Mbps。
         * 每个加速地域支持分配的最小带宽为2 Mbps。
         * 您最多可输入100个加速地域带宽。
         * @example `4`
         */
        Bandwidth: number;
        /**
         * 要修改的加速地域ID。
         * 您最多可输入100个加速地域ID。
         * @example `ips-bp11c9mpphtb1xkds****`
         */
        IpSetId: string;
    }[];
}
