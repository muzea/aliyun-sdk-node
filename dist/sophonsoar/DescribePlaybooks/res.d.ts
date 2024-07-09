export interface DescribePlaybooksResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `138B5AB7-7F2B-5814-87A3-E3ECFE1F207E`
     */
    RequestId: string;
    /**
     * 剧本的列表。
     */
    Playbooks: {
        /**
         * 剧本的展示名称。
         * @example `demo_playbook`
         */
        DisplayName: string;
        /**
         * 剧本的UUID。
         * @example `bb5a8640-a14f-44ef-8376-cxxxxx`
         */
        PlaybookUuid: string;
        /**
         * 剧本的类型，取值：
         * - **preset**：预定义剧本。
         * - **user**：自定义剧本。
         * @example `user`
         */
        OwnType: string;
        /**
         * 剧本的状态标识。取值：
         * - **1**：表示启动剧本。
         * - **0**：表示停止剧本。
         * @example `1`
         */
        Active: number;
        /**
         * 剧本的最后执行时间，格式：13位的时间戳。
         * @example `1683526277415`
         */
        LastRuntime: number;
        /**
         * 剧本创建时间，格式：13位的时间戳。
         * @example `1683526277415`
         */
        GmtCreate: number;
        /**
         * 剧本修改时间
         * @example `1681396398000`
         */
        GmtModified: string;
    }[];
    /**
     * 分页查询信息。
     */
    Page: {
        /**
         * 查询到的信息总数量。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页查询时，每页显示的条目数量。
         * @example `10`
         */
        PageSize: number;
    };
}
