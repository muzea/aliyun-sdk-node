export interface GetRentedJoinPermissionResponse {
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
     * 租用的入网凭证信息列表。
     */
    Data: {
        /**
         * 入网凭证的类型。取值：
         * - **LOCAL**：专用凭证。
         * - **ROAMING**：泛在凭证。
         * @example `LOCAL`
         */
        Type: string;
        /**
         * 入网凭证的当月上行数据包量。
         * @example `0`
         */
        RxMonthSum: number;
        /**
         * 凭证绑定的节点组名称。
         * @example `123`
         */
        BoundNodeGroupName: string;
        /**
         * 入网凭证的当月下行数据包量。
         * @example `0`
         */
        TxMonthSum: number;
        /**
         * 入网凭证采用的频段的频段ID。
         * @example `102`
         */
        FreqBandPlanGroupId: number;
        /**
         * 入网凭证的当天下行数据包量。
         * @example `0`
         */
        TxDailySum: number;
        /**
         * 工作速率。
         * @example `2`
         */
        DataRate: number;
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
         * 入网凭证的当天上行数据包量。
         * @example `0`
         */
        RxDailySum: number;
        /**
         * 入网凭证使用的JoinEUI。
         * @example `0000000000000000`
         */
        JoinEui: string;
        /**
         * 入网凭证的创建时间，格式为 UNIX 时间戳，以毫秒为单位。
         * @example `1514736000000`
         */
        CreateMillis: number;
        /**
         * 入网凭证的启停用状态。**true**表示启用，**false**表示停用。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * classA的接收窗口延时。
         * @example `1`
         */
        RxDelay: number;
        /**
         * 凭证绑定的节点组id。
         * @example `123`
         */
        BoundNodeGroupId: string;
        /**
         * 使用该入网凭证的节点数量。
         * @example `10`
         */
        NodesCnt: number;
        /**
         * 入网凭证的名称。
         * @example `凭证1`
         */
        JoinPermissionName: string;
    };
}
