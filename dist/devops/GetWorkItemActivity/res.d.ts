export interface GetWorkItemActivityResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMsg: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * true或者false
     * @example `true`
     */
    success: boolean;
    /**
     * 动态信息
     */
    activities: {
        /**
         * 事件类型
         * @example `workitem.updated`
         */
        eventType: string;
        /**
         * 动作类型
         * @example `update`
         */
        actionType: string;
        /**
         * 事件时间
         * @example `1640867079624`
         */
        eventTime: number;
        /**
         * 操作对象
         * @example `e8bxxxxxxxxxxxxxxxx23`
         */
        resourceIdentifier: string;
        /**
         * 操作者
         * @example `19xx7043xxxxxxx914`
         */
        operator: string;
        /**
         * 事件id
         * @example `3201131`
         */
        eventId: number;
        /**
         * 父事件id
         * @example `3201132`
         */
        parentEventId: number;
        /**
         * 修改属性
         * @example `public`
         */
        property: {
            /**
             * 属性key
             * @example `subject`
             */
            propertyName: string;
            /**
             * 类型
             * @example `null`
             */
            propertyType: string;
            /**
             * 资源id
             * @example `subject`
             */
            propertyIdentifier: string;
            /**
             * 属性的展示名
             * @example `标题`
             */
            displayName: string;
        };
        /**
         * 更新前的值
         */
        oldValue: {
            /**
             * 修改值的类型，同propertyName
             * @example `Sprint`
             */
            resourceType: string;
            /**
             * 旧值
             * @example `bed1cca179badeb501a72d1194`
             */
            plainValue: string;
            /**
             * 旧值的显示值
             * @example `Sprint-221124`
             */
            displayValue: string;
        }[];
        /**
         * 更新后的值
         */
        newValue: {
            /**
             * 修改值的类型，同propertyName
             * @example `Sprint`
             */
            resourceType: string;
            /**
             * 新值
             * @example `bed1cca179badeb501a72d1194`
             */
            plainValue: string;
            /**
             * 新值的显示值
             * @example `Sprint-221124`
             */
            displayValue: string;
        }[];
    }[];
}
