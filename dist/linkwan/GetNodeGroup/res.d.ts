export interface GetNodeGroupResponse {
    /**
     * 是否调用成功。返回值：
     * - **true**：调用成功。
     * - ** false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 调用成功时返回的节点分组信息列表。
     */
    Data: {
        /**
         * 与节点分组关联的入网凭证的当月上行数据包量。
         * @example `0`
         */
        RxMonthSum: number;
        /**
         * 节点分组的名称。
         * @example `节点分组名称`
         */
        NodeGroupName: string;
        /**
         * 节点分组所关联的组播组能够容纳的节点数量。
         * @example `1000`
         */
        MulticastNodeCapacity: number;
        /**
         * - 如果关联的是专用凭证，该字段表示入网凭证拥有者的阿里云账号。
         * - 如果关联的是泛在凭证，该字段值为**AliCloud IoT**。
         * @example `some-user`
         */
        JoinPermissionOwnerAliyunId: string;
        /**
         * 节点分组所关联的组播组是否被启用。返回值：
         * - **true**：启用。
         * - **false**：停用。
         * @example `false`
         */
        MulticastEnabled: boolean;
        /**
         * 与节点分组关联的入网凭证的当月下行数据包量。
         * @example `0`
         */
        TxMonthSum: number;
        /**
         * 节点分组中的节点采用的频段ID，与分组所关联的入网凭证中指定的一致。
         * @example `102`
         */
        FreqBandPlanGroupId: number;
        /**
         * 与节点分组关联的入网凭证的当天下行数据包量。
         * @example `0`
         */
        TxDailySum: number;
        /**
         * 与节点分组关联的入网凭证的启停状态。返回值：
         * - **true**：启用。
         * - **false**：停用。
         * @example `true`
         */
        JoinPermissionEnabled: boolean;
        /**
         * 与节点分组关联的入网凭证的ID。
         * @example `1234569`
         */
        JoinPermissionId: string;
        /**
         * 节点分组中的节点所采用的LoRaWAN Class模式，与分组所关联的入网凭证中指定的一致。
         * @example `A`
         */
        ClassMode: string;
        /**
         * 节点分组ID。
         * @example `123456`
         */
        NodeGroupId: string;
        /**
         * 节点分组所关联的组播组当前已经添加的节点数量。
         * @example `10`
         */
        MulticastNodeCount: number;
        /**
         * 节点分组的数据流转启停状态。返回值：
         * - **true**：启用。
         * - **false**：停用。
         * @example `false`
         */
        DataDispatchEnabled: boolean;
        /**
         * 节点分组所关联的组播组ID。
         * @example `1234`
         */
        MulticastGroupId: string;
        /**
         * 与节点分组关联的入网凭证的当天上行数据包量。
         * @example `0`
         */
        RxDailySum: string;
        /**
         * 节点分组中的节点使用的JoinEUI，与分组所关联的入网凭证中指定的JoinEUI一致。
         * @example `0000000000000000`
         */
        JoinEui: string;
        /**
         * 节点分组的创建时间，格式为UNIX时间戳，以毫秒为单位。
         * @example `1514736000000`
         */
        CreateMillis: number;
        /**
         * 与节点分组关联的入网凭证类型。返回值：
         * - **LOCAL**：专用凭证。
         * - **ROAMING**：泛在凭证。
         * @example `LOCAL`
         */
        JoinPermissionType: string;
        /**
         * 节点分组中的节点数量。
         * @example `10`
         */
        NodesCnt: number;
        /**
         * 与节点分组关联的入网凭证的名称。
         * @example `凭证1`
         */
        JoinPermissionName: string;
        /**
         * 节点分组所关联的操作锁列表。
         */
        Locks: {
            /**
             * 锁ID。
             * @example `123`
             */
            LockId: string;
            /**
             * 锁的类型。取值：**WRITE**，表示所有写操作都加锁，包括编辑、删除等。
             * @example `WRITE`
             */
            LockType: string;
            /**
             * 锁的创建时间。
             * @example `1514736000000`
             */
            CreateMillis: number;
            /**
             * 锁的启停用状态。
             * @example `true`
             */
            Enabled: boolean;
        }[];
        /**
         * 节点分组的数据流转配置。
         */
        DataDispatchConfig: {
            /**
             * 数据流转目的地。返回值：
             * - **IOT**：数据流转到物联网平台的产品。
             * - **ONS**：数据流转到MQ的Topic。
             * @example `IOT`
             */
            Destination: string;
            /**
             * 如果流转目的地是物联网平台的产品，该字段存储产品信息。
             */
            IotProduct: {
                /**
                 * 数据流转目的地为**IOT**的调试开关。返回值：
                 * - **true**：打开调试开关。
                 * - **false**：关闭调试开关。
                 * @example `true`
                 */
                DebugSwitch: boolean;
                /**
                 * 产品的ProductKey。
                 * @example `HMyB*******`
                 */
                ProductKey: string;
                /**
                 * 产品名称。
                 * @example `产品名`
                 */
                ProductName: string;
                /**
                 * 产品类型。返回值：
                 * - **IOT_SUITE**：数据流转到IoT套件基础版。
                 * - **IOT_SUITE_SENIOR**：数据流转到IoT套件高级版。
                 * @example `IOT_SUITE`
                 */
                ProductType: string;
            };
            /**
             * 如果流转目的地是MQ，该字段存储MQ Topic信息。
             */
            OnsTopics: {
                /**
                 * MQ上行Topic。
                 * @example `topic2`
                 */
                UplinkTopic: string;
                /**
                 * MQ上行Region ID。
                 * @example `cn-hangzhou`
                 */
                UplinkRegionName: string;
                /**
                 * MQ下行Region ID。
                 * @example `cn-beijing`
                 */
                DownlinkRegionName: string;
                /**
                 * MQ下行Topic。
                 * @example `topic1`
                 */
                DownlinkTopic: string;
            };
        };
    };
}
