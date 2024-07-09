export interface ListGatewayOnlineRecordsResponse {
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
     * 返回结果。
     */
    Data: {
        /**
         * 记录总条数。
         * @example `25`
         */
        TotalCount: number;
        /**
         * 记录列表。
         */
        List: {
            /**
             * 切换到此状态的时间点，以毫秒为单位的UNIX时间戳。
             * @example `1514737000000`
             */
            StateChangedMillis: number;
            /**
             * 在线状态，可取值：**ONLINE**：在线，**OFFLINE**：离线。
             * @example `ONLINE`
             */
            OnlineState: string;
            /**
             * 网关的GwEUI。
             * @example `000000000000`
             */
            GwEui: string;
        }[];
    };
}
