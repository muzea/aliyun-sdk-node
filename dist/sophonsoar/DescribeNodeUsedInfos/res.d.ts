export interface DescribeNodeUsedInfosResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3B10F836-C2B1-54FA-AB59-7591B548FB59`
     */
    RequestId: string;
    /**
     * 节点的引用信息，返回为JSON格式，包含的字段：
     * - **action**：引用的动作，包含信息：
     *    - **name**：引用的节点名称
     *    - **inputParams**：引用的参数配置
     * @example `{
        "action": [
            {
                "name": "query_books",
                "inputParams": [
                    {
                        "referInfos": [
                            "${play_group.datalist.*.ids}"
                        ],
                        "name": "querySql"
                    }
                ]
            }
        ]
    }`
     */
    NodeUsedInfos: string;
}
