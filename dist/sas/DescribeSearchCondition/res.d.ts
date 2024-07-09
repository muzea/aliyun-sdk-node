export interface DescribeSearchConditionResponse {
    /**
     *
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3AEC47AF-8CFA-485E-AC9A-3A8ABC06EA7F`
     */
    RequestId: string;
    /**
     * 筛选条件信息。
     */
    ConditionList: {
        /**
         *
         * 筛选条件的类型。取值：
         * - **system**：系统默认的筛选条件
         * - **user**：用户自定义的筛选条件
         * @example `system`
         */
        ConditionType: string;
        /**
         * 筛选条件名称的key值。
         * @example `stop_machine`
         */
        NameKey: string;
        /**
         * 筛选条件的名称。
         * @example `StopMachine`
         */
        Name: string;
        /**
         * 筛选条件。该值为JSON格式，包含以下字段：
         * - **filterParams**：过滤参数，该值为JSON格式，包含以下字段：
         *     - **labelKey**：需要渲染的KEY。
         *     - **label**：展示名
         *     - **value**：筛选条件值，该值为JSON格式，包含以下字段：
         *         -  **name**：筛选项
         *         -  **value**：筛选项对应值
         * - **LogicalExp**：条件连接关系，取值：
         *     - **AND**：筛选条件是**与**关系
         *     - **OR**：筛选条件是**或**关系
         * >当**ConditionType**为**system**时 **labelKey**存在，且仅作为国际化渲染时使用。
         * @example `{\"filterParams\":[{\"labelKey\":\"a|b\",\"value\":\"{\\\"name\\\":\\\"sadsasd\\\",\\\"value\\\":\\\"dasdsdas\\\"}\"}],\"LogicalExp\":\"OR\"}`
         */
        FilterConditions: string;
    }[];
}
