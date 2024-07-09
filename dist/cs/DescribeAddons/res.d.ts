export interface DescribeAddonsResponse {
    /**
     * 组件分组列表。
     */
    ComponentGroups: {
        /**
         * 组件分组名称。
         * @example `storage`
         */
        group_name: string;
        /**
         * 该分组内包含的组件名称。
         */
        items: {
            /**
             * 组件名称。
             * @example `flexvolume`
             */
            name: string;
        }[];
    }[];
    /**
     * 标准组件。
     */
    StandardComponents: any;
}
