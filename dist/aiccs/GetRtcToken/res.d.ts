export interface GetRtcTokenResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 接口调用是否成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回数据。
     * @example `{"cleansession":true,"clientId":"GID_VOIP@@@ClientId_2000000001271771_100685295007","conferenceTopic":"cs_alicom_voip_conference_pre","dataTopic":"alicom_voip_data_pre","host":"mqtt-cn-4590mdhb901.mqtt.aliyuncs.com","meetingEventKeepAliveInterval":0,"phoneTopic":"alicom_voip_phone","port":0,"reconnectTimeout":2000,"registerTime":0,"sdkClientPort":8883,"serverId":"GID_VOIP@@@MTEuMjIuMTQ1Ljgy","sgwServerTopic":"alicom_voip_server_pre","tlsport":443,"tokenData":"LzMT+XLFl5s/YWJ/MlDz4t/Lq5HC1iGU1P28HAMaxYzmBSHQsWXgdISJ1ZJ+2cxaU0jwYsoyG8Q8cCIbLZTwwaFHf7gc7pPXbJGYgJWUr5ooKsoHaVvvG34cww7W8woWE1OsmZGFDODvooOIjF1CZSorVrR8OwRdprW99yqhMhkJKh7r5f3HfiQgoJWL8b3A85RrRGCSP057skgQ5rIqVAlx7jDFrOTdLtz+krken8qYvpaVBO9wRfFyWQLvxAgNJNx3Oql/hpzc2o3+xbKGTA/P2siLn6Nee1FYk5ClpXcnvfSTM4BAauuWR+oES10VblKEKTU5R/pfjXj3UKOlZ1+OdGO93WA16BR/l1uRb3cOLqya5pjWM+oSmo0sOR7B0ATLz6K1xA0Pc+p6Mu8hZl+OdGO93WA1kj1L0h9Z6CAZG4ol/BNdIg9z6noy7yFmX450Y73dYDWSPUvSH1noIBkbiiX8E10iT0a6ypXxupQdyyrhh8j1yw6otqnw5AT5Tj5VsVWVfflXeZ8nPt1ydXC9nWeHX7K80O6vtOU9M8Qn5VrhkP0F1umbOoYs3NfM+WYZIQx4pkViQo6qqkxgbEg1l6oHJbmOVzrxYRrDTIxqgE/pb0YVJQ==","useTLS":false,"username":"LTAI27GqAW1VrcQA"}`
     */
    Data: {
        /**
         * Token信息。
         * @example `{“cleansession”:true,”clientId”:”GID_VOIP@@@ClientId_****”,”conferenceTopic”:”cs_alicom_voip_conference”,”host”:”mqtt-cn-4590mdhb901.mqtt.aliyuncs.com”,”meetingEventKeepAliveInterval”:0,”phoneTopic”:”alicom_voip_phone”,”port”:0,”reconnectTimeout”:2000,”registerTime”:0,”sdkClientPort”:8883,”serverId”:”GID_VOIP@@@MTEuMTMuMTM2LjExOA==”,”sgwServerTopic”:”alicom_voip_server_pre”,”tlsport”:443,”tokenData”:”abcdef”,”useTLS”:false}`
         */
        Token: string;
        /**
         * 通过互联网域接入的终端身份标识。
         * @example `200000000*******`
         */
        RtcId: string;
        /**
         * 账号名称。
         * @example `139000000`
         */
        AccountName: string;
    };
}
