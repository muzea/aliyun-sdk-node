export interface QueryNotifyResponse {
    /**
     * 返回字段列表。
     */
    Data: {
        /**
         * 通知列表。
         */
        NotifyItemList: {
            /**
             * 通知ID。
             * @example `103499`
             */
            Id: number;
            /**
             * 通知创建时间。
             * @example `2022-04-21T02:04:04Z`
             */
            GmtCreated: string;
            /**
             * 通知修改时间。
             * @example `2022-04-21T02:10:47Z`
             */
            GmtModified: string;
            /**
             * 当前阿里云主账号的ID。
             * @example `22973492****`
             */
            AliUid: number;
            /**
             * 用于保证通知的幂等性，防止重复发送通知。
             * @example `ETnLKlblzczshOTUbOCz****`
             */
            IdempotentId: string;
            /**
             * 重复发送的通知被拦截的次数。
             * @example `0`
             */
            IdempotentCount: string;
            /**
             * 通知类型。返回值：
             * * **Sell**：售卖通知
             * * **Operation**：运维通知
             * * **Promotion**：促销通知
             * @example `Sell`
             */
            Type: string;
            /**
             * 通知的等级。返回值：
             * * **help**：帮助级别
             * * **success**：执行成功级别
             * * **warning**：警告级别
             * * **error**：执行失败级别
             * * **loading**：任务进行中
             * * **notice**：普通级别
             * @example `error`
             */
            Level: string;
            /**
             * 通知模版。返回值：
             * * **RenewalRecommend**：续费建议
             * * **InstanceCreateFailed**：实例创建失败且退款
             * @example `InstanceCreateFailed`
             */
            TemplateName: string;
            /**
             * 通知模板中的元素，由JSON字符串组成。**TemplateName**不同，JSON中包含的参数不同。
             * * **TemplateName**为**RenewalRecommend**：
             *     * **instanceName**：即将过期实例的ID。
             *     * **reservedTime**：剩余天数。
             * * **TemplateName**为**InstanceCreateFailed**：
             *     * **orderId**：购买实例的订单号。
             *     * **reason**：实例创建失败的原因。
             * @example `{\"orderId\":21466****}`
             */
            NotifyElement: string;
            /**
             * 通知是否已被接收，即是否已调用[ConfirmNotify](~~610444~~)接口将通知标记为已确认。返回值：
             * * **true**：是
             * * **false**：否
             * @example `true`
             */
            ConfirmFlag: boolean;
            /**
             * 当前阿里云账号下通知接收人的UID，该UID调用了[ConfirmNotify](~~610444~~)接口将通知标记为已确认。
             * 返回**0**代表该通知被系统自动接收。
             * @example `0`
             */
            Confirmor: number;
        }[];
        /**
         * 每页记录数。
         * @example `25`
         */
        PageSize: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 总记录数。
         * @example `1`
         */
        TotalRecordCount: number;
    };
    /**
     * 请求ID。
     * @example `94CB8D93-017A-5AE7-A118-6E0F89D93C0A`
     */
    RequestId: string;
}
