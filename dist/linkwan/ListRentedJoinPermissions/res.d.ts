export interface ListRentedJoinPermissionsResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 符合过滤条件的入网凭证总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 符合过滤条件的入网凭证列表。
         */
        List: {
            /**
             * 入网凭证的类型。
             * @example `LOCAL`
             */
            Type: string;
            /**
             * 入网凭证绑定的节点组名称。
             * @example `123`
             */
            BoundNodeGroupName: string;
            /**
             * 入网凭证采用的频段的频段ID。
             * @example `102`
             */
            FreqBandPlanGroupId: string;
            /**
             * 工作速率。
             * @example `4`
             */
            DataRate: string;
            /**
             * 入网凭证ID。
             * @example `123`
             */
            JoinPermissionId: string;
            /**
             * 入网凭证采用的LoRaWAN Class模式，可取值：A、B、C。
             * @example `A`
             */
            ClassMode: string;
            /**
             * 入网凭证使用的的JoinEUI。
             * @example `0000000000000000`
             */
            JoinEui: string;
            /**
             * 入网凭证的启停用状态。
             * @example `true`
             */
            Enabled: boolean;
            /**
             * 入网凭证是否已关联到节点分组。
             * @example `false`
             */
            BoundNodeGroup: boolean;
            /**
             * classA的接收窗口延时。
             * @example `1`
             */
            RxDelay: string;
            /**
             * 入网凭证绑定的节点组id。
             * @example `123`
             */
            BoundNodeGroupId: string;
            /**
             * - 如果该入网凭证是**专用入网凭证**，该字段表示拥有者的阿里云账号ID。
             * - 如果该入网凭证是**泛在入网凭证**，该字段恒为AliCloud IoT。
             * @example `some-user1`
             */
            OwnerAliyunId: string;
            /**
             * 入网凭证的名称。
             * @example `凭证1`
             */
            JoinPermissionName: string;
            DataDispatchConfig: {
                Destination: string;
                IotProduct: {
                    DebugSwitch: boolean;
                    ProductKey: string;
                    ProductName: string;
                    ProductType: string;
                };
                OnsTopics: {
                    UplinkTopic: string;
                    UplinkRegionName: string;
                    DownlinkRegionName: string;
                    DownlinkTopic: string;
                };
            };
        }[];
    };
}
