export interface ListSubscriptionsRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 第几页
         * @example `1`
         */
        pageNumber: number;
        /**
         * 一页几条
         * @example `10`
         */
        pageSize: number;
        /**
         * 通知订阅名
         * @example `newTitle`
         */
        subscriptionTitle: string;
        /**
         * 订阅范围类型 ALL全部 SERVICE服务 ROUTERULE 流转规则
         * @example `SERVICE`
         */
        scope: string;
        /**
         * 订阅范围对象名称
         * @example `TestName`
         */
        scopeObject: string;
        /**
         * 通知对象类型：SERVICEGROUP服务组 USER个人
         * @example `SERVICE`
         */
        notifyObjectType: string;
        /**
         * 通知对象名
         * @example `test`
         */
        notifyObject: string;
        /**
         * 幂等参数
         * @example `601FA6A2-AC5C-4B59-BE11-378FTOKENA11`
         */
        clientToken: string;
        notFilterScopeObjectDeleted: boolean;
    };
}
