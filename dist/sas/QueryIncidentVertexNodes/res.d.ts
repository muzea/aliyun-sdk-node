export interface QueryIncidentVertexNodesResponse {
    /**
     * 本次请求获取的结果列表。
     */
    VertexNodes: {
        /**
         * 本次请求获取的节点列表。
         */
        VertexList: {
            /**
             * 当前节点的ID。
             * @example `225`
             */
            Id: string;
            /**
             * 当前节点的名称。
             * @example `zabbix`
             */
            Name: string;
            /**
             * 当前节点的类型。取值包括但不限于：
             * - **process:** 进程
             * - **file:** 文件
             * - **alert:** 告警
             * - **ip:** IP地址
             * - **domain:** 域名
             * @example `domain`
             */
            Type: string;
            /**
             * 当前节点的创建时间。
             * @example `1636081135`
             */
            Time: string;
            /**
             * 当前节点的创建时间戳（unix时间戳，单位毫秒）。
             * @example `1645179073`
             */
            Timestamp: number;
            /**
             * 当前节点的UUID。
             * @example `02ca8614-ecdb-44d3-b3d0-15865508****`
             */
            Uuid: string;
            /**
             * 生成当前节点的规则ID。
             * @example `171`
             */
            RuleId: string;
            /**
             * 当前节点的属性信息文本。
             * @example `{}`
             */
            Properties: string;
            /**
             * 当前节点的属性。
             */
            Property: any;
            /**
             * 当前节点的更新时间。
             * @example `2021-12-16T07:20:33.000Z`
             */
            UpdateTime: string;
            /**
             * 当前节点所属的阿里云用户ID。
             * @example `20973951`
             */
            Aliuid: string;
            /**
             * 当前节点的相邻节点列表。
             */
            NeighborList: {
                /**
                 * 相邻节点的节点类型。取值包括但不限于：
                 * - **process:** 进程
                 * - **file:** 文件
                 * - **alert:** 告警
                 * - **ip:** IP地址
                 * - **domain:** 域名
                 * @example `elf`
                 */
                Type: string;
                /**
                 * 相邻节点的节点数量。
                 * @example `27`
                 */
                Count: number;
                /**
                 * 是否有更多相邻节点。取值：
                 * - **true:** 有更多相邻节点
                 * - **false:** 没有更多相邻节点
                 * @example `false`
                 */
                HasMore: boolean;
            }[];
            /**
             * 当前节点的展示信息。
             */
            DisplayInfo: {
                /**
                 * 展示信息属性名称。
                 * @example `zabbix`
                 */
                Name: string;
                /**
                 * 展示信息属性值。
                 * @example `cs-nacos`
                 */
                Value: string;
            }[];
            /**
             * 相邻节点渲染需要的语言。取值：
             * - **zh:** 中文
             * - **en:** 英文
             * @example `zh`
             */
            Lang: string;
        }[];
        /**
         * 本次请求获取的边列表。
         */
        EdgeList: {
            /**
             * 当前边的开始ID。
             * @example `52003`
             */
            StartId: string;
            /**
             * 当前边的开始类型。取值包括但不限于：
             * - **process:** 进程
             * - **file:** 文件
             * - **alert:** 告警
             * - **ip:** IP地址
             * - **domain:** 域名
             * @example `process`
             */
            StartType: string;
            /**
             * 当前边的结束ID。
             * @example `64002`
             */
            EndId: string;
            /**
             * 当前边的结束类型。取值包括但不限于：
             * - **process:** 进程
             * - **file:** 文件
             * - **alert:** 告警
             * - **ip:** IP地址
             * - **domain:** 域名
             * @example `file`
             */
            EndType: string;
            /**
             * 当前边的名称。
             * @example `jdk`
             */
            Name: string;
            /**
             * 当前边的类型。
             * @example `cve`
             */
            Type: string;
            /**
             * 当前边的创建时间。
             * @example `2021-11-06 11:00:00`
             */
            Time: string;
            /**
             * 当前边的创建时间戳（unix时间戳，单位毫秒）。
             * @example `1645168444`
             */
            Timestamp: number;
            /**
             * 当前边归属的阿里云用户ID。
             * @example `20973951*****`
             */
            Aliuid: string;
            /**
             * 当前边的UUID。
             * @example `549237d6-86d1-47f6-9ffa-3f97da9e****`
             */
            Uuid: string;
            /**
             * 当前边的原始名称。
             * @example `distribution`
             */
            Origin: string;
            /**
             * 当前边的属性信息文本。
             * @example `{}`
             */
            Properties: string;
            /**
             * 当前边的属性。
             */
            Property: any;
            /**
             * 当前边的展示类型。
             * @example `type`
             */
            ShowType: string;
            /**
             * 生成当前边的规则ID。
             * @example `368`
             */
            RuleId: string;
            /**
             * 当前边的更新时间。
             * @example `2021-12-16T07:20:33.000Z`
             */
            UpdateTime: string;
            /**
             * 当前边的类型名。
             * @example `weak_password`
             */
            TypeName: string;
        }[];
        /**
         * 本次请求获取的实体类型列表。
         */
        EntityTypeList: {
            /**
             * 当前实体的ID。
             * @example `33926`
             */
            Id: string;
            /**
             * 当前实体的名称。
             * @example `auto-test-policy-name`
             */
            Name: string;
            /**
             * 当前实体的创建时间。
             * @example `2022-09-23T10:50Z`
             */
            GmtCreate: string;
            /**
             * 当前实体的修改时间。
             * @example `2022-09-23T10:50Z
            `
             */
            GmtModified: string;
            /**
             * 当前实体的命名空间。
             * @example `78`
             */
            Namespace: string;
            /**
             * 当前实体的展示模板。
             * @example `template1`
             */
            DisplayTemplate: string;
            /**
             * 当前实体的展示颜色。
             * @example `red`
             */
            DisplayColor: string;
            /**
             * 当前实体的同步ID。
             * @example `3212024a-1816-46d5-b286-e5d5780f****`
             */
            SyncId: number;
            /**
             * 当前实体的版本。
             * @example `993`
             */
            CurrentVersionId: string;
            /**
             * 当前实体的展示图标。
             * @example `http://img.22222.com`
             */
            DisplayIcon: string;
            /**
             * 当前实体的展示顺序。
             * @example `01`
             */
            DisplayOrder: number;
            /**
             * 当前实体的溯源成功标识。取值：
             * - **1**: 实体溯源成功
             * - **0**:  实体溯源失败
             * @example `true`
             */
            TraceSuccessFlag: number;
            /**
             * 当前实体是否虚拟节点。
             * @example `true`
             */
            IsVirtualNode: number;
        }[];
        /**
         * 本次请求获取的关系类型列表。
         */
        RelationTypeList: {
            /**
             * 当前关系的ID。
             * @example `9350`
             */
            Id: string;
            /**
             * 当前关系的名称。
             * @example `mongod`
             */
            Name: string;
            /**
             * 当前关系的方向。取值：
             * - **1**：正向
             * - **0**：反向
             * @example `in`
             */
            Directed: number;
            /**
             * 当前关系的创建时间。
             * @example `2022-08-02T10:20Z`
             */
            GmtCreate: string;
            /**
             * 当前关系的更新时间。
             * @example `2022-08-02T10:20Z
            `
             */
            GmtModified: string;
            /**
             * 当前关系的命名空间。
             * @example `default`
             */
            Namespace: string;
            /**
             * 当前关系的展示模板。
             * @example `template1`
             */
            DisplayTemplate: string;
            /**
             * 当前关系的展示颜色。
             * @example `red`
             */
            DisplayColor: string;
            /**
             * 当前关系的同步ID。
             * @example `a45185c7-b1b8-4a49-b04a-d6bfa051****`
             */
            SyncId: number;
            /**
             * 当前关系的版本。
             * @example `1487`
             */
            CurrentVersionId: string;
            /**
             * 当前关系的展示类型。
             * @example `type1`
             */
            ShowType: string;
            /**
             * 当前关系的展示图标。
             * @example `http://img.33.com`
             */
            DIsplayIcon: string;
        }[];
        /**
         * 本次请求需要渲染的语言。 取值：
         * - **zh:** 中文
         * - **en:** 英文
         * @example `zh`
         */
        Lang: string;
    };
    /**
     * 本次请求是否成功。取值
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `ACF97412-FD09-4D1F-994F-34DF12BR****`
     */
    RequestId: string;
}
