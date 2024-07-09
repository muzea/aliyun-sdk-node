export interface CreateMPULayoutRequest {
    /**
     * 布局的窗格列表。
     */
    "Panes": {
        /**
         * 指定主窗格，每个布局只能有一个主窗格。
         * - **0**：副窗格。
         *
         * - **1**：主窗格。
         * @example `1`
         */
        MajorPane: number;
        /**
         * 窗格宽，归一化百分比。Width取值范围：**0.0<Width≤1.0**。
         * @example `0.25`
         */
        Width: number;
        /**
         * 窗格高，归一化百分比。Height取值范围：**0.0<Height≤1.0**。
         * @example `0.25`
         */
        Height: number;
        /**
         * 坐标Y，归一化百分比。坐标Y取值范围：**0.0≤Y≤1.0**。
         * @example `0.25`
         */
        Y: number;
        /**
         * 布局ID，从左上到右下排序，从0开始。
         * @example `0`
         */
        PaneId: number;
        /**
         * 叠放顺序，0为最底层，1层在0层之上，以此类推。
         * @example `0`
         */
        ZOrder: number;
        /**
         * 坐标X，归一化百分比。坐标X取值范围：**0.0≤X≤1.0**。
         * @example `0.25`
         */
        X: number;
    }[];
    /**
     * 应用ID，仅支持传单个ID。
     * 您可以在控制台创建和查询。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 布局名称。
     * @example `LayoutName`
     */
    "Name"?: string;
    /**
     * 最大混音个数。取值范围：**0**~**6**。
     * @example `3`
     */
    "AudioMixCount": number;
}
