export interface SwitchApiRequest {
    /**
     * api分组编号
     * @example `8dfec8759a6e4831bf73d8a982c20778`
     */
    "GroupId"?: string;
    /**
     * API编号
     * @example `b41f334843c445619bc3b85419895b3e`
     */
    "ApiId": string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `RELEASE`
     */
    "StageName": string;
    /**
     * 描述，限200字以内
     * @example `for_demo`
     */
    "Description": string;
    /**
     * 历史版本号
     * @example `20210305180312839`
     */
    "HistoryVersion": string;
}
