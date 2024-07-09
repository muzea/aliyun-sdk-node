export interface CreateOrUpdateSwimmingLaneGroupResponse {
    /**
     * 请求ID。
     * @example `EE5C32A1-BC0E-4B79-817C-103E4EDF****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * true：请求成功。
     * false：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Success`
     */
    ErrorCode: string;
    /**
     * 返回信息。
     * @example `请求处理成功
    `
     */
    Message: string;
    /**
     * 数据概览。
     * @example `{}`
     */
    Data: {
        /**
         * 应用名
         * @example `example-app`
         */
        Name: string;
        /**
         * 是否开启数据库灰度
         * @example `true`
         */
        DbGrayEnable: string;
        /**
         * 应用所属的用户id。
         * @example `12345`
         */
        UserId: string;
        /**
         * 消息灰度过滤侧。
         * @example `Client`
         */
        MessageQueueFilterSide: string;
        /**
         * 应用id列表，逗号分隔。
         * @example `abcd1@abcde123,abcd1@abcde124`
         */
        AppIds: string;
        /**
         * MSE命名空间名字。
         * @example `prod`
         */
        Namespace: string;
        /**
         * 是否开启记录请求详情。
         * @example `true`
         */
        RecordCanaryDetail: boolean;
        /**
         * 泳道组id。
         * @example `2047`
         */
        Id: number;
        /**
         * 入口应用。
         * @example `mse:abcd1@a2345`
         */
        EntryApp: string;
        /**
         * 应用所属地域。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 是否开启消息灰度。
         * @example `true`
         */
        MessageQueueGrayEnable: boolean;
        paths: string;
        Paths: string;
        canaryModel: number;
        CanaryModel: number;
    };
}
