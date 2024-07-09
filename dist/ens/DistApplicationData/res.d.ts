export interface DistApplicationDataResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 目标边缘资源实例ID的总数。
     * @example `2`
     */
    DistInstanceTotalCount: number;
    DistInstanceIds: {
        /**
         * 目标边缘资源实例ID列表。
         */
        DistInstanceId: string[];
    };
    DistResults: {
        /**
         * 各个数据文件的分发操作执行结果。
         */
        DistResult: {
            /**
             * 分发结果描述信息。
             * @example `Success`
             */
            ResultDescrip: string;
            /**
             * 数据文件版本号。
             * @example `standard`
             */
            Version: string;
            /**
             * 分发执行结果错误码。枚举类型。
             * @example `400`
             */
            ResultCode: number;
            /**
             * 数据文件名。
             * @example `gcs-prod-websocket-eip-unicom`
             */
            Name: string;
        }[];
    };
}
