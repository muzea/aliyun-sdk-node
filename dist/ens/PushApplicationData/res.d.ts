export interface PushApplicationDataResponse {
    PushResults: {
        /**
         * 各个数据文件的预推操作执行结果。
         */
        PushResult: {
            /**
             * 数据文件名。
             * @example `gcs-pre-websocket-eip-telecom`
             */
            Name: string;
            /**
             * 预推错误码。枚举类型，取值范围：
             * - 0：预推操作成功
             * - 100：已执行过预推操作，且当前预推状态处于"已预推成功"
             * - 200：已执行过预推操作，且当前预推状态处于"预推中"（部分文件服务器处于预推中）
             * - 300：预推操作失败，需要重新触发预推操作；具体错误描述参考ResultDescrip
             * @example `100`
             */
            ResultCode: number;
            /**
             * 状态结果描述信息。
             * @example `成功`
             */
            ResultDescrip: string;
            /**
             * 数据文件版本号。
             * @example `standard`
             */
            Version: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
