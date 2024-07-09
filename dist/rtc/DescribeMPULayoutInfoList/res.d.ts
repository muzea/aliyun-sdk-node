export interface DescribeMPULayoutInfoListResponse {
    /**
     * 总页数。
     * @example `1`
     */
    TotalPage: number;
    /**
     * 请求ID。
     * @example `760bad53276431c499e30dc36f6b26be`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalNum: number;
    Layouts: {
        /**
         * 布局列表。
         */
        Layout: {
            /**
             * 布局ID。
             * @example `2`
             */
            LayoutId: number;
            /**
             * 布局名称。
             * @example `LayoutName`
             */
            Name: string;
            /**
             * 最大混音个数。
             * @example `3`
             */
            AudioMixCount: number;
            Panes: {
                /**
                 * 布局的窗格参数。
                 */
                Panes: {
                    /**
                     * 指定主窗格，每个布局只能有一个主窗格。
                     * - **0**：副窗格。
                     * - **1**：主窗格。
                     * @example `0`
                     */
                    MajorPane: number;
                    /**
                     * 窗格宽，归一化百分比。
                     * @example `0.5`
                     */
                    Width: number;
                    /**
                     * 窗格高，归一化百分比。
                     * @example `0.5`
                     */
                    Height: number;
                    /**
                     * 坐标Y，归一化百分比。
                     * @example `0.5`
                     */
                    Y: number;
                    /**
                     * 窗格ID，从左上到右下排序，从0开始。
                     * @example `0`
                     */
                    PaneId: number;
                    /**
                     * 叠放顺序，0为最底层，1层在0层之上，以此类推。
                     * @example `0`
                     */
                    ZOrder: number;
                    /**
                     * 坐标X，归一化百分比。
                     * @example `0.5`
                     */
                    X: number;
                }[];
            };
        }[];
    };
}
