export interface DescribeZoneVpcTreeResponse {
    /**
     * 唯一请求识别码。
     * @example `7B07FBC3-3A53-4939-A3C6-2BDFE407BAB2`
     */
    RequestId: string;
    Zones: {
        /**
         * Zone 列表。
         */
        Zone: {
            /**
             * 更新时间。
             * @example `2019-09-18T08:20Z`
             */
            UpdateTime: string;
            /**
             * Zone类型。
             * - AUTH_ZONE：权威Zone。
             * - CLOUD_PRODUCT_ZONE：云产品权威Zone。
             * @example `AUTH_ZONE`
             */
            ZoneType: string;
            /**
             * 备注。
             * @example `demo`
             */
            Remark: string;
            /**
             * 创建时间。
             * @example `2019-09-18T08:20Z`
             */
            CreateTime: string;
            Vpcs: {
                /**
                 * 绑定的 vpc 列表。
                 */
                Vpc: {
                    /**
                     * vpc 名称。
                     * @example `demo-vpc`
                     */
                    VpcName: string;
                    /**
                     * vpc id。
                     * @example `vpc-2z21341ssdadsfzyd49ra`
                     */
                    VpcId: string;
                    /**
                     * vpc类型。
                     * - STANDARD：标准VPC。
                     * - EDS：无影工作区VPC。
                     * @example `STANDARD`
                     */
                    VpcType: string;
                    /**
                     * region 名称。
                     * @example `China North 2`
                     */
                    RegionName: string;
                    /**
                     * region Id。
                     * @example `cn-beijing`
                     */
                    RegionId: string;
                }[];
            };
            /**
             * 解析记录条数。
             * @example `1`
             */
            RecordCount: number;
            /**
             * Zone 名称。
             * @example `localzone.demo`
             */
            ZoneName: string;
            /**
             * 更新时间（时间戳）。
             * @example `1568794834000`
             */
            UpdateTimestamp: number;
            /**
             * Zone id。
             * @example `6d83e3b31aa60ca4aaa7161f1b6baa95`
             */
            ZoneId: string;
            /**
             * 云产品类型。
             * - 若ZoneType为权威zone，则此为空。
             * - 若ZoneType为云产品zone，则此为云产品类型。
             * @example `BLINK`
             */
            ZoneTag: string;
            /**
             * 是否是反解zone。
             * - true：是反解zone
             * - false：非反解zone
             * @example `false`
             */
            IsPtr: boolean;
            /**
             * 创建时间（时间戳）。
             * @example `1568794812000`
             */
            CreateTimestamp: number;
            /**
             * 内置权威位置区。
             * - NORMAL_ZONE：普通区
             * - FAST_ZONE：快速区
             * @example `NORMAL_ZONE`
             */
            DnsGroup: string;
            /**
             * Zone创建者。
             * @example `5463564356`
             */
            Creator: string;
            /**
             * 操作者类型。
             * @example `USER`
             */
            CreatorType: string;
            /**
             * Zone切换位置区状态。
             * - true：切换中
             * - false：未切换
             * @example `true`
             */
            DnsGroupChanging: boolean;
        }[];
    };
}
