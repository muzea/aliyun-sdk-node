export interface GetOwnedJoinPermissionResponse {
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
     * 所拥有入网凭证的信息列表。
     */
    Data: {
        /**
         * 入网凭证的当月上行数据包量。
         * @example `0`
         */
        RxMonthSum: number;
        /**
         * 入网凭证可接入组播节点容量。
         * @example `1000`
         */
        MulticastNodeCapacity: number;
        /**
         * 入网凭证组播的启停用状态。
         * @example `false`
         */
        MulticastEnabled: boolean;
        /**
         * 入网凭证的当月下行数据包量。
         * @example `0`
         */
        TxMonthSum: number;
        /**
         * 入网凭证所采用的频段的频段ID。
         * @example `102`
         */
        FreqBandPlanGroupId: number;
        /**
         * 入网凭证的当天下行数据包量。
         * @example `0`
         */
        TxDailySum: number;
        BoundProductName: string;
        /**
         * 工作速率。
         * @example `4`
         */
        DataRate: number;
        /**
         * 入网凭证ID。
         * @example `123`
         */
        JoinPermissionId: string;
        /**
         * 入网凭证采用的LoRaWAN Class模式。取值：A、B、C。
         * @example `A`
         */
        ClassMode: string;
        /**
         * 数据流转目的地。取值：
         * - **IOT**：数据流转到IoT的产品。
         * - **ONS**：数据流转到MQ的Topic。
         * @example `IOT`
         */
        DataDispatchDestination: string;
        /**
         * 入网凭证已接入组播节点数量。
         * @example `10`
         */
        MulticastNodeCount: number;
        /**
         * 入网凭证的当天上行数据包量。
         * @example `0`
         */
        RxDailySum: number;
        /**
         * 入网凭证所使用的JoinEUI。
         * @example `0000000000000000`
         */
        JoinEui: string;
        /**
         * 入网凭证的创建时间。格式为 UNIX 时间戳，单位毫秒。
         * @example `1514736000000`
         */
        CreateMillis: number;
        /**
         * 入网凭证的启停用状态。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * classA的接收窗口延时。
         * @example `1`
         */
        RxDelay: number;
        /**
         * 入网凭证租户的阿里云账号ID。
         * @example `some-user`
         */
        RenterAliyunId: string;
        /**
         * 使用该入网凭证的节点的数量。
         * @example `10`
         */
        NodesCnt: number;
        /**
         * 入网凭证的名称。
         * @example `凭证1`
         */
        JoinPermissionName: string;
        /**
         * 入网凭证的授权状态。取值：
         * - **NEW**：未授权
         * - **APPLYING**：授权中
         * - **ACCEPTED**：已授权
         * @example `NEW`
         */
        AuthState: string;
    };
}
