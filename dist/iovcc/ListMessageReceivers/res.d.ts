export interface ListMessageReceiversResponse {
    /**
     * 分页查询设备接收者数据对象。
     */
    MessageReceivers: {
        /**
         * 分页查询对象。
         */
        Pagination: {
            /**
             * 分页页码。
             * @example `1`
             */
            PageIndex: number;
            /**
             * 总分页数。
             * @example `30`
             */
            TotalPageCount: number;
            /**
             * 分页每页数据集大小。
             * @example `20`
             */
            PageSize: number;
            /**
             * 数据集总数。
             * @example `2`
             */
            TotalCount: number;
        };
        /**
         * 设备接收者对象列表。
         */
        List: {
            /**
             * 消息接收对象类型。
             * 取值：**uuid**（deviceId）、**imei**、**kp**、**terminal**。
             * @example `uuid`
             */
            Type: string;
            /**
             * 设备接收对象值。
             * @example `fc35429dff9b473c81d7ef5f62ab11dc`
             */
            Value: string;
            /**
             * 消息ID。
             * @example `33566`
             */
            Mid: number;
        }[];
    };
    /**
     * 请求ID。
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
}
