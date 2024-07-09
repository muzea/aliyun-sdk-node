export interface DescribeLatestRecordSchemaResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `10B92EE1-4597-593B-A131-7A17D25EF5C9`
     */
    RequestId: string;
    /**
     * 剧本输出结构信息。
     */
    PlaybookNodeSchema: {
        /**
         * 结构信息。
         */
        NodeSchema: {
            /**
             * 节点的名称。
             * @example `DataFormat_1`
             */
            NodeName: string;
            /**
             * 组件的名称。
             * @example `DataFormat`
             */
            ComponentName: string;
            /**
             * 组件的动作名称。
             * @example `formatedata`
             */
            ActionName: string;
            /**
             * 输出字段
             */
            OutputFields: string[];
        }[];
    };
}
