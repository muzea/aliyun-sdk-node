export interface ListWorkItemAllFieldsResponse {
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
     * 字段信息
     */
    fields: {
        /**
         * 创建人阿里云accountId
         * @example `19xx7043xxxxxxx914`
         */
        creator: string;
        /**
         * 描述信息
         * @example `字段的具体信息`
         */
        description: string;
        /**
         * 创建时间的时间戳，单位毫秒
         * @example `1623916393000`
         */
        gmtCreate: number;
        /**
         * 修改时间的时间戳，单位毫秒
         * @example `1623916393000`
         */
        gmtModified: number;
        /**
         * 区分不同的类型，如系统字段：NativeField，用户自定义字段：CustomField
         * @example `NativeField`
         */
        type: string;
        /**
         * 字段唯一标识符
         * @example `e8bxxxxxxxxxxxxxxxx23`
         */
        identifier: string;
        /**
         * 修改人阿里云accountId
         * @example `19xx7043xxxxxxx914`
         */
        modifier: string;
        /**
         * 字段名称
         * @example `负责人`
         */
        name: string;
        /**
         * 字段格式
         * @example `list`
         */
        format: string;
        /**
         * 字段类型
         * @example `例：date`
         */
        className: string;
        /**
         * 区分不同的适用对象
         * @example `例：Workitem`
         */
        resourceType: string;
        /**
         * 默认值
         * @example `123`
         */
        defaultValue: string;
        /**
         * 是否必填
         * @example `false`
         */
        isRequired: boolean;
        /**
         * 是否是系统必须字段，比如：负责人、状态等。
         * @example `false`
         */
        isSystemRequired: boolean;
        /**
         * 联动的服务，比如迭代，迭代服务开启/关闭，这个字段加进/剔除出对应的模板； 字段模板里，这类字段不能手动添加或删除
         * @example `null`
         */
        linkWithService: string;
        /**
         * 创建时是否展示
         * @example `false`
         */
        isShowWhenCreate: boolean;
        /**
         * 待选值
         */
        options: {
            /**
             * 待选值的唯一标识
             * @example `重复的缺陷`
             */
            identifier: string;
            /**
             * 字段唯一标识
             * @example `e8bxxxxxxxxxxxxxxxx23`
             */
            fieldIdentifier: string;
            /**
             * 待选值中文名称
             * @example `重复的缺陷`
             */
            value: string;
            /**
             * 待选值英文名称
             * @example `null`
             */
            valueEn: string;
            /**
             * 根据语言环境获取当前展示的值
             * @example `重复的缺陷`
             */
            displayValue: string;
            /**
             * 待选值顺序
             * @example `1`
             */
            position: number;
            /**
             * 展示级别，数字范围1~9，数字越大，颜色越浅。
             * @example `1`
             */
            level: number;
        }[];
    }[];
}
