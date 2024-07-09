export interface BatchQuerySessionByClientIdsResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的。
     * @example `63309FDB-ED6C-46AE-B31C-A172FBA0****`
     */
    RequestId: string;
    /**
     * 客户端状态列表。
     */
    OnlineStatusList: {
        /**
         * 设备是否在线，取值说明如下：
         * - **true**：在线
         * - **false**：不在线
         * @example `true`
         */
        OnlineStatus: boolean;
        /**
         * 客户端的Client ID。Client ID的详细信息，请参见[名词解释](~~42420~~)。
         * @example `GID_test@0001`
         */
        ClientId: string;
    }[];
}
