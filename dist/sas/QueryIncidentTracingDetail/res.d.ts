export interface QueryIncidentTracingDetailResponse {
    /**
     * 本次请求返回的溯源图详细信息。
     */
    TracingDetail: {
        /**
         * 本次请求返回的节点列表。
         */
        VertexList: {
            /**
             * 当前节点的节点ID。
             * @example `383044`
             */
            Id: string;
            /**
             * 当前节点的节点名称。
             * @example `auto-test-attestor`
             */
            Name: string;
            /**
             * 当前节点的节点类型。 取值包括但不限于：
             * - **process:** 进程
             * - **file:** 文件
             * - **alert:** 告警
             * - **ip:** IP地址
             * - **domain:** 域名
             * @example `alidetect`
             */
            Type: string;
            /**
             * 当前节点的创建时间。
             * @example `2021-11-26`
             */
            Time: string;
            /**
             * 当前节点的创建时间戳（unix时间戳，单位毫秒）。
             * @example `1663048980`
             */
            Timestamp: number;
            /**
             * 当前节点的UUID， 是由SIEM系统为溯源图中的节点和边生成的唯一标识，可用于定位溯源图中唯一的节点或者边。
             * @example `32e36d8a-2b5d-4f71-98a8-12775685****`
             */
            Uuid: string;
            /**
             * 生成当前节点的规则ID。
             * @example `301425`
             */
            RuleId: string;
            /**
             * 当前节点的具体属性信息文本。
             * @example `[{'PropertyValues': [{'PropertyValueId': 239, 'PropertyValue': '121'}, {'PropertyValueId': 240, 'PropertyValue': '6666'}], 'PropertyKey': '22222222', 'PropertyId': 203}]`
             */
            Properties: string;
            /**
             * 当前节点的具体属性信息。
             * @example `{\"coverage\":\"global\"}`
             */
            Property: any;
            /**
             * 当前节点的更新时间。
             * @example `2022-01-13 12:49:33`
             */
            UpdateTime: string;
            /**
             * 当前节点归属的阿里云用户ID。
             * @example `148714671713****`
             */
            Aliuid: string;
            /**
             * 与当前节点相邻的节点列表。
             */
            NeighborList: {
                /**
                 * 节点类型。取值包括但不限于：
                 * - **process:** 进程
                 * - **file:** 文件
                 * - **alert:** 告警
                 * - **ip:** IP地址
                 * - **domain:** 域名
                 * @example `2`
                 */
                Type: string;
                /**
                 * 节点数量。
                 * @example `0`
                 */
                Count: number;
                /**
                 * 是否有更多。取值：
                 * - **true**:  还有更多相邻节点
                 * - **false**: 没有更多相邻节点
                 * @example `True`
                 */
                HasMore: boolean;
            }[];
            /**
             * 当前节点的展示信息。
             */
            DisplayInfo: {
                /**
                 * 当前节点需要展示的属性名称。
                 * @example `scan:ACSV-2020-111301`
                 */
                Name: string;
                /**
                 * 当前节点需要展示的属性值。
                 * @example `10.16.1`
                 */
                Value: string;
            }[];
            /**
             * 当前节点需要渲染的语言类型。
             * @example `zh`
             */
            Lang: string;
        }[];
        /**
         * 本次请求返回的边列表。
         */
        EdgeList: {
            /**
             * 当前边的开始节点ID。
             * @example `23003`
             */
            StartId: string;
            /**
             * 当前边的开始节点类型。取值包括但不限于：
             * - **process:** 进程
             * - **file:** 文件
             * - **alert:** 告警
             * - **ip:** IP地址
             * - **domain:** 域名
             * @example `process`
             */
            StartType: string;
            /**
             * 当前边的结束节点ID。
             * @example `223a185f05e5fc3c637`
             */
            EndId: string;
            /**
             * 当前边的结束节点类型。取值包括但不限于：
             * - **process:** 进程
             * - **file:** 文件
             * - **alert:** 告警
             * - **ip:** IP地址
             * - **domain:** 域名
             * @example `process_test_process`
             */
            EndType: string;
            /**
             * 当前边的名称。
             * @example `mongod`
             */
            Name: string;
            /**
             * 当前边的类型。取值包括但不限于：
             * - **process_exec_file:** 进程执行文件
             * - **process_connect_ip：** 进程连接IP
             * - **domain_trgger_alert：** 域名出发告警
             * @example `elf`
             */
            Type: string;
            /**
             * 当前边的创建时间。
             * @example `1652941117`
             */
            Time: string;
            /**
             * 当前边的创建时间戳（unix时间戳，单位毫秒）。
             * @example `1636092632`
             */
            Timestamp: number;
            /**
             * 当前边所归属的阿里云用户ID。
             * @example `1277498600854739`
             */
            Aliuid: string;
            /**
             * 当前边的UUID， 是由SIEM系统为溯源图中的节点和边生成的唯一标识，可用于定位溯源图中唯一的节点或者边。
             * @example `678e29f4-d78f-4a7c-a2bc-38434a13****`
             */
            Uuid: string;
            /**
             * 当前边的源顶点ID。
             * @example `distribution`
             */
            Origin: string;
            /**
             * 当前边的具体属性信息文本。
             * @example `{\"bandWidth\":\"8192\",\"internetIp\":\"8.211.13.50\",\"changeReason\":\"EIP_BIND\",\"bindInstanceId\":\"i-gw887xhzjvyjfv7vdfs3\",\"bindType\":\"EIP_ECS\"}`
             */
            Properties: string;
            /**
             * 当前边的具体属性。
             * @example `{\"coverage\":\"global\"}`
             */
            Property: any;
            /**
             * 当前边的展示类型。
             * @example `0`
             */
            ShowType: string;
            /**
             * 生成当前边的规则ID。
             * @example `136`
             */
            RuleId: string;
            /**
             * 当前边的更新时间。
             * @example `2022-01-13 12:49:33`
             */
            UpdateTime: string;
            /**
             * 当前边的类型名称。
             * @example `cis`
             */
            TypeName: string;
        }[];
        /**
         * 本地请求返回的实体类型列表。
         */
        EntityTypeList: {
            /**
             * 当前实体类型的ID。
             * @example `1425`
             */
            Id: string;
            /**
             * 当前实体类型的名称。取值包括但不限于：
             * - **process:** 进程
             * - **file:** 文件
             * - **alert:** 告警
             * - **ip:** IP地址
             * - **domain:** 域名
             * @example `auto-test-policy-name`
             */
            Name: string;
            /**
             * 当前实体类型的创建时间。
             * @example `2022-10-09T10:53Z`
             */
            GmtCreate: string;
            /**
             * 当前实体类型的修改时间。
             * @example `1585816811000`
             */
            GmtModified: string;
            /**
             * 当前实体类型的命名空间。
             * @example `78`
             */
            Namespace: string;
            /**
             * 当前实体类型的展示模板。
             * @example `[]`
             */
            DisplayTemplate: string;
            /**
             * 当前实体类型的展示颜色。
             * @example `#FFF`
             */
            DisplayColor: string;
            /**
             * 当前实体类型的同步ID。
             * @example `e2fdf402-b4ed-4e1a-9e95-44d60696****`
             */
            SyncId: number;
            /**
             * 当前实体类型的版本ID。
             * @example `1768`
             */
            CurrentVersionId: string;
            /**
             * 当前实体类型的展示图标。
             * @example `-`
             */
            DisplayIcon: string;
            /**
             * 当前实体类型的展示顺序。
             * @example `2`
             */
            DisplayOrder: number;
            /**
             * 当前实体类型的溯源成功标志。取值
             * - **1**：跟踪成功
             * - **0**：跟踪失败
             * @example `1`
             */
            TraceSuccessFlag: number;
            /**
             * 是否虚拟节点。取值
             * - **1**：是虚拟节点
             * - **0**：不是虚拟节点
             * @example `1`
             */
            IsVirtualNode: number;
        }[];
        /**
         * 本次请求返回的关系类型列表。
         */
        RelationTypeList: {
            /**
             * 当前关系类型的ID。
             * @example `1514`
             */
            Id: string;
            /**
             * 当前关系类型的名称。取值包括但不限于：
             * - **process_exec_file:** 进程执行文件
             * - **process_connect_ip：** 进程连接IP
             * - **domain_trgger_alert：** 域名出发告警
             * @example `wusa`
             */
            Name: string;
            /**
             * 当前关系类型的方向。取值
             * - **1** ：正向
             * - **0**：反向
             * @example `1`
             */
            Directed: number;
            /**
             * 当前关系类型的创建时间。
             * @example `2022-09-23T10:50Z`
             */
            GmtCreate: string;
            /**
             * 当前关系类型的修改时间。
             * @example `2022-07-12T07:58:49Z`
             */
            GmtModified: string;
            /**
             * 当前关系类型的命名空间。
             * @example `default`
             */
            Namespace: string;
            /**
             * 当前关系类型的展现模板。
             * @example `[]`
             */
            DisplayTemplate: string;
            /**
             * 当前关系类型的展现颜色。
             * @example `#FFF`
             */
            DisplayColor: string;
            /**
             * 当前关系类型的同步ID。
             * @example `sync-0000aws50gyy2oci****`
             */
            SyncId: number;
            /**
             * 当前关系类型的版本。
             * @example `1487`
             */
            CurrentVersionId: string;
            /**
             * 当前关系类型的展示类型。
             * @example `0`
             */
            ShowType: string;
            /**
             * 当前关系类型的显示图标。
             * @example `https://img.alicdn.com/imgextra/i2/O1CN01jpZwD31G56XYPEJv2_!!600000000****-55-tps-25-28.svg`
             */
            DisplayIcon: string;
        }[];
        /**
         * 本次请求返回结果的渲染语言。取值：
         * - **zh**: 中文
         * - **en**: 英文
         * @example `zh`
         */
        Lang: string;
    };
    /**
     * 本次请求是否成功。取值：
     * - **true**: 接口调用成功
     * - **false**: 接口调用失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D2956025-4E5C-529D-92B4-B2591DDE****`
     */
    RequestId: string;
}
