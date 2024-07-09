export interface DescribeTraceInfoDetailResponse {
    /**
     * 接口调用的结果状态。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次请求的ID。
     * @example `24A20733-10A0-4AF6-BE6B-XXXXXXXXX`
     */
    RequestId: string;
    /**
     * 溯源图的详情。
     */
    TraceInfoDetail: {
        /**
         * 溯源图中的边信息。
         */
        EdgeList: {
            /**
             * 溯源图中边的类型。
             * @example `trigger_file_alert`
             */
            Type: string;
            /**
             * 时间点。
             * @example `2022-12-21 10:24:42`
             */
            Time: string;
            /**
             * 溯源图中边的起始点 Id。
             * @example `02b4bf933c8e3bb8b9465eee502xxxxx`
             */
            StartId: string;
            /**
             * 次数。
             * @example `1`
             */
            Count: number;
            /**
             * 溯源图中边终点 Id。
             * @example `a1d1fa39e5345dcef3f9712172cxxxxx`
             */
            EndId: string;
        }[];
        /**
         * 溯源图中所有顶点的信息。
         */
        VertexList: {
            /**
             * 顶点代表实体的类型。
             * @example `file_path`
             */
            Type: string;
            /**
             * 时间点。
             * @example `2022-12-21 10:24:42`
             */
            Time: string;
            /**
             * 顶点代表实体的名称。
             * @example `/usr/local/tomcat`
             */
            Name: string;
            /**
             * 顶点 Id。
             * @example `a1d1fa39e5345dcef3f9712172xxxxxx`
             */
            Id: string;
            /**
             * 次数。
             * @example `1`
             */
            Count: number;
            /**
             * 邻居节点的信息。
             */
            NeighborList: {
                /**
                 * 邻居节点类型，固定为: **alert**。
                 * @example `alert`
                 */
                Type: string;
                /**
                 * 是否还有下一页。
                 * @example `False`
                 */
                HasMore: boolean;
                /**
                 * 邻居节点数量。
                 * @example `1`
                 */
                Count: number;
            }[];
        }[];
        /**
         * 顶点类型元数据配置信息。
         */
        EntityTypeList: {
            /**
             * 顶点渲染颜色。
             * @example `#fff`
             */
            DisplayColor: string;
            /**
             * 已废弃。
             * @example `Deprecated`
             */
            DbId: number;
            /**
             * 已废弃。
             * @example `[{"name":"${logtime}","value":"$!{time}"}]`
             */
            DisplayTemplate: string;
            /**
             * 顶点的图标样式。
             * @example `https://img.alicdn.com/tfs/TB176P5OgDqK1RjSZSyXXaxEVXa-49-48.png`
             */
            DisplayIcon: string;
            /**
             * 已废弃。
             * @example `Deprecated`
             */
            Limit: number;
            /**
             * 创建时间。
             * @example `2022-10-09T11:47Z`
             */
            GmtCreate: number;
            /**
             * 已废弃。
             * @example `Deprecated`
             */
            Offset: number;
            /**
             * 命名空间。
             * @example `*`
             */
            Namespace: string;
            /**
             * 顶点类型名称。
             * @example `Alert`
             */
            Name: string;
            /**
             * 最新修改时间。
             * @example `2022-10-09T11:47Z`
             */
            GmtModified: number;
            /**
             * 顶点类型记录 id。
             * @example `Alert`
             */
            Id: string;
        }[];
        /**
         * 边类型元数据配置信息。
         */
        RelationTypeList: {
            /**
             * 已废弃。
             * @example `Deprecated`
             */
            ShowType: string;
            /**
             * 边的渲染颜色。
             * @example `#fff`
             */
            DisplayColor: string;
            /**
             * 边类型的名称。
             * @example `file`
             */
            Name: string;
            /**
             * 是否为有向边。
             * - **1**：是
             * - **0**：否
             * @example `1`
             */
            Directed: number;
            /**
             * 边类型 Id。
             * @example `netflow_to_process`
             */
            RelationTypeId: string;
        }[];
    };
}
