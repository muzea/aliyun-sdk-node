export interface QueryTreeDataResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EF2ECA2D-D8E6-5021-BF5C-19DD6D52C5B2`
     */
    RequestId: string;
    /**
     * 返回的剧本信息列表，为JSONString的格式。包含以下字段：
     * - **active**：表示剧本是否启动，**true**表示已启动，**false**表示未启动
     * - **displayName**：表示剧本的名称。
     * - **playbookUuid**：表示剧本的UUID。
     * @example `[
        {
            "playbook": {
                "active": false,
                "displayName": "test_playbook",
                "playbookUuid": "09a20455-3d3a-424c-a1df-xxxxxx"
            }
        }
    ]`
     */
    Playbooks: string;
}
