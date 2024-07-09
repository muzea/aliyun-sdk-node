export interface ListInstancesResponse {
    /**
     * 返回下一页的查询凭证。
     * @example `ADBAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 实例总数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 返回的最大数，取值范围：1~100。
     * @example `50`
     */
    MaxResults: number;
    Instances: {
        /**
         * 实例列表。
         */
        Instance: {
            /**
             * 实例状态。取值范围：
             * - Pending：创建中
             * - Running：运行中
             * - Starting：启动中
             * - Stopping：停止中
             * - Stopped：已停止
             * @example `Running`
             */
            Status: string;
            /**
             * 镜像创建时间，采用ISO 8601格式。
             * @example `2021-01-01T01:07Z`
             */
            CreationTime: string;
            /**
             * 实例密钥对名称。
             * @example `testKeyPairName`
             */
            KeyPairName: string;
            /**
             * 安全组ID，与ECS使用相同的安全组。
             * @example `sg-xxxxx`
             */
            SecurityGroupId: string;
            /**
             * 是否自动续费，只对预付费实例生效。
             * @example `false`
             */
            AutoRenew: boolean;
            /**
             * 实例付费类型。
             * @example `PostPaid`
             */
            ChargeType: string;
            /**
             * 操作系统的中文显示名称。
             * @example `Android 9.0`
             */
            OsName: string;
            /**
             * 实例ID。
             * @example `cp-xxxxxxxxxxx`
             */
            InstanceId: string;
            /**
             * 实例规格。
             * @example `ecp.ce.large`
             */
            InstanceType: string;
            /**
             * 云手机地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 实例描述。
             * @example `testDescription`
             */
            Description: string;
            /**
             * 预付费实例到期时间。
             * @example `2021-12-21T22:00Z`
             */
            ExpiredTime: string;
            /**
             * 实例名称。
             * @example `testInstanceName`
             */
            InstanceName: string;
            /**
             * 可用区。
             * @example `cn-hangzhou-i`
             */
            ZoneId: string;
            /**
             * 云手机实例选用的分辨率。
             * @example `1920*1080`
             */
            Resolution: string;
            /**
             * 镜像ID。
             * @example `cpm-xxxxxxxx`
             */
            ImageId: string;
            /**
             * 操作系统的英文显示名称。
             * @example `Android 9.0`
             */
            OsNameEn: string;
            /**
             * 实例的VPC信息。
             */
            VpcAttributes: {
                /**
                 * 私网IP
                 * @example `192.168.0.85`
                 */
                PrivateIpAddress: string;
                /**
                 * 虚拟交换机ID
                 * @example `vsw-bp1kbwqxxxxx`
                 */
                VSwitchId: string;
            };
            /**
             * 实例的弹性公网IP信息。
             */
            EipAddress: {
                /**
                 * EIP付费类型。
                 * @example `PayByTraffic`
                 */
                InternetChargeType: string;
                /**
                 * EIP的地址。
                 * @example `120.55.XX.XX`
                 */
                IpAddress: string;
                /**
                 * EIP带宽值。
                 * @example `2`
                 */
                Bandwidth: number;
                /**
                 * 云手机实例EIP的ID。
                 * @example `eip-bp1vctqgcoi6i9nxxxxxx`
                 */
                AllocationId: string;
            };
            /**
             * webRtcToken信息
             * @example `eDeybrh74h34***`
             */
            WebRtcToken: string;
            Tags: {
                /**
                 * 实例的标签集合。
                 */
                Tag: {
                    /**
                     * 实例的标签键。
                     * @example `TestKey`
                     */
                    Key: string;
                    /**
                     * 实例的标签值。
                     * @example `TestValue`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
