export interface ListOwnedJoinPermissionsResponse {
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
             * 入网凭证使用的JoinEUI。
             * @example `0000000000000000`
             */
            JoinEui: string;
            /**
             * 入网凭证采用的频段的频段ID。
             * @example `102`
             */
            FreqBandPlanGroupId: number;
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
             * @example `some-user1`
             */
            RenterAliyunId: string;
            /**
             * 工作速率。
             * @example `4`
             */
            DataRate: number;
            /**
             * 入网凭证的ID。
             * @example `102`
             */
            JoinPermissionId: string;
            /**
             * 入网凭证的名称。
             * @example `凭证1`
             */
            JoinPermissionName: string;
            /**
             * 入网凭证采用的LoRaWAN Class模式，可取值：A、B、C。
             * @example `A`
             */
            ClassMode: string;
            /**
             * 入网凭证的授权状态。取值：
             * - **NEW**：未授权
             * - **APPLYING**：授权中
             * - **ACCEPTED**：已授权
             * @example `NEW`
             */
            AuthState: string;
        }[];
    };
}
