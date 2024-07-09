export interface ListSubscriptionsResponse {
    /**
     * id of the request
     * @example `10REQUES-AC5C-4B59-BE11-378F117A6A88`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 订阅id
         * @example `10`
         */
        subscriptionId: number;
        /**
         * 通知订阅名称
         * @example `test`
         */
        subscriptionTitle: string;
        /**
         * 0 全部 1服务 2 流转规则
         * @example `SERVICE`
         */
        scope: number;
        /**
         * 0服务组 1个人
         * @example `USER`
         */
        notifyObjectType: number;
        /**
         * 有效期类型 LONG_TERM 长期 SHORT_TERM短期
         * @example `LONG_TERM`
         */
        expiredType: string;
        /**
         * 时效开始时间
         * @example `2020-05-09 10:10:10`
         */
        startTime: string;
        /**
         * 时效结束时间
         * @example `2022-05-09 10:10:10`
         */
        endTime: string;
        /**
         * 1 启用 0禁用
         * @example `ENABLE`
         */
        status: string;
        /**
         * 订阅范围列表
         */
        scopeObjectList: {
            /**
             * id主键
             * @example `10`
             */
            id: number;
            /**
             * 订阅范围类型 ALL全部 SERVICE服务 ROUTERULE 流转规则
             * @example `SERVICE`
             */
            scope: number;
            /**
             * 订阅范围对象关联表主键id
             * @example `10`
             */
            scopeObjectId: number;
            /**
             * 订阅范围对象名称
             * @example `阿里云服务`
             */
            scopeObject: string;
            isValid: number;
        }[];
        /**
         * 通知对象列表
         */
        notifyObjectList: {
            /**
             * id主键
             * @example `10`
             */
            id: number;
            /**
             * 通知对象类型SERVICEGROUP服务组 USER个人
             * @example `USER`
             */
            notifyObjectType: number;
            /**
             * 关联主键id
             * @example `10`
             */
            notifyObjectId: number;
            /**
             * 通知对象名
             * @example `张珊`
             */
            name: string;
            isValid: number;
        }[];
    }[];
    /**
     * 分页参数
     * @example `100`
     */
    totalCount: number;
    /**
     * 分页参数
     * @example `1`
     */
    pageNumber: number;
    /**
     * 分页参数
     * @example `10`
     */
    pageSize: number;
}
